import * as path from "path";
import {
    MessageSecurityMode,
    SecurityPolicy,
    OPCUAClient,
    ClientSession,
    OPCUAClientOptions,
    ClientSubscription,
    AttributeIds,
    ClientMonitoredItemBase,
    TimestampsToReturn,
    resolveNodeId,
    DataType,
    Variant,
    NodeIdLike,
    OPCUACertificateManager,
} from "node-opcua";
import envPaths from "env-paths";

class OpcClient {
    private session: ClientSession;
    private client: OPCUAClient;
    private isConnected = false;
    public subscription: ClientSubscription;

    constructor() {
        const config = envPaths("Factovia-MiniFactory").config;
        const pkiFolder = path.join(config, "PKI-Client");

        const connectOptions: OPCUAClientOptions = {
            clientCertificateManager: new OPCUACertificateManager({
                rootFolder: pkiFolder,
            }),
            applicationName: "SmartFactory",
            connectionStrategy: {
                initialDelay: 10,
                maxRetry: 15,
            },
            securityMode: MessageSecurityMode.None,
            securityPolicy: SecurityPolicy.None,
            endpointMustExist: false,
        };

        this.client = OPCUAClient.create(connectOptions);
    }

    /**
     * Connect your client to a given server.
     * @param hostname The hostname of your OPC-UA server @example "opc.tcp://localhost:4334/UA/SmartFactory"
     */
    async connectClient(hostname: string) {
        if (this.isConnected) {
            return;
        }
        try {
            await this.client.connect(hostname).catch((err) => {
                console.error(`Impossible de se connecter au client OPCUA.`);
                console.error("OPC-UA connexion error ==> ", err);
                throw err;
            });

            this.session = await this.client.createSession();

            this.subscription = await this.session.createSubscription2({
                requestedPublishingInterval: 500,
                requestedLifetimeCount: 10,
                requestedMaxKeepAliveCount: 5,
                maxNotificationsPerPublish: 10,
                publishingEnabled: true,
                priority: 1,
            });

            this.subscription
                .on("started", function () {
                    console.log(
                        "subscription started - subscriptionId=",
                        this.subscription.subscriptionId
                    );
                })
                .on("terminated", function () {
                    console.log("terminated");
                });
            this.isConnected = true;
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Return a monitor object for a given nodeId
     * @param nodeId The id of the node you want to monitor @example "ns=1;i=1001"
     */
    async createMonitoredItem(nodeId: NodeIdLike): Promise<ClientMonitoredItemBase> {
        return this.subscription.monitor(
            {
                nodeId: resolveNodeId(nodeId),
                attributeId: AttributeIds.Value,
            },
            {
                samplingInterval: 250,
                discardOldest: true,
                queueSize: 1,
            },
            TimestampsToReturn.Both
        );
    }

    async modifyNode(nodeId: string, value: number) {
        return this.session.write({
            nodeId,
            attributeId: AttributeIds.Value,
            value: {
                value: new Variant({
                    value,
                    dataType: DataType.Double,
                }),
            },
        });
    }
}

export default OpcClient;
