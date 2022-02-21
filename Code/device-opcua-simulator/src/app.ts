import OpcServer from "./OPC/opcServer";
import OpcClient from "./OPC/opcClient";
import {
  Variant,
  DataType,
  StatusCodes,
  makeAccessLevelFlag,
  DataValue
} from "node-opcua";

async function main() {
  // *** SERVER PART ***
  const server = new OpcServer();

  await server.sessionInit();

  const newDevice = server.namespace.addObject({
    organizedBy: server.server.engine.addressSpace.rootFolder.objects,
    browseName: "Device1"
  });

  const randomVar = server.namespace.addVariable({
    componentOf: newDevice,
    browseName: "Random",
    dataType: "Double",
    accessLevel: makeAccessLevelFlag("CurrentRead")
  });

  setInterval(() => {
    // Value is changed by server
    const value = Math.random() * 10;
    randomVar.setValueFromSource({ dataType: DataType.Double, value });
  }, 500);

  // *** CLIENT PART ***

  const clientDevice = server.namespace.addObject({
    organizedBy: server.server.engine.addressSpace.rootFolder.objects,
    browseName: "ClientDevice"
  });

  // We'll modify this variable with our local opc client.
  const clientVar = server.namespace.addVariable({
    componentOf: clientDevice,
    browseName: "ClientVar",
    dataType: "Double",
    accessLevel: makeAccessLevelFlag("CurrentRead | CurrentWrite")
  });
  clientVar.setValueFromSource({ dataType: DataType.Double, value: 1.1 });

  // Create a constant var for test modification with another client.
  const constantVar = server.namespace.addVariable({
    componentOf: clientDevice,
    browseName: "ConstantVar",
    dataType: "Double",
    accessLevel: makeAccessLevelFlag("CurrentRead")
  });
  constantVar.setValueFromSource({ dataType: DataType.Double, value: 10.0 });

  const client = new OpcClient();
  await client.connectClient(server.hostname);

  const nodeMonitor = await client.createMonitoredItem(clientVar.nodeId);
  nodeMonitor.on("changed", (dataValue: DataValue) => {
    console.log("Value changed by client ! ", dataValue.value.value);
  });

  setInterval(async () => {
    // Value is changed by the client
    const statusCode = await client.modifyNode(
      clientVar.nodeId.toString(),
      Math.random() * 10
    );
    if (statusCode !== StatusCodes.Good) {
      console.log(
        "modify node failed with statusCode =",
        statusCode.toString()
      );
    }
  }, 1000);
}

main();
