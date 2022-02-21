import * as path from "path";
import {
    OPCUAServer,
    OPCUACertificateManager,
    MessageSecurityMode,
    SecurityPolicy,
    Namespace,
    UAObject
} from "node-opcua";

import envPaths from "env-paths";
const config = envPaths("Factovia-MiniFactory").config;
const pkiFolder = path.join(config, "PKI-Server");

class OpcServer {
    public server: OPCUAServer;
    public namespace: Namespace;
    public device: UAObject;
    private port: number;
    public hostname: string;

    /**
     * Create a mock server OPC-UA with node-opc
     * @param port The port of the server @default 4334
     */
    constructor(port: number = 4334) {
        this.port = port;
    }

    sessionInit() {
        return new Promise<void>(async (resolve) => {
            this.server = new OPCUAServer({
                serverCertificateManager: new OPCUACertificateManager({
                    rootFolder: pkiFolder
                }),
                port: this.port, // the port of the listening socket of the server
                resourcePath: "/UA/SmartFactory",
                allowAnonymous: true,
                securityModes: [MessageSecurityMode.None],
                securityPolicies: [SecurityPolicy.None]
            });
            await this.server.initialize();

            const addressSpace = this.server.engine.addressSpace;
            this.namespace = addressSpace.getOwnNamespace();

            await this.server.start();
            console.log("Server is now listening ... (press CTRL+C to stop)");
            const endpointUrl =
                this.server.endpoints[0].endpointDescriptions()[0].endpointUrl;
            this.hostname = endpointUrl;
            console.log(" the primary server endpoint url is ", endpointUrl);
            resolve();
        });
    }
}
export default OpcServer;
