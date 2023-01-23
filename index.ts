import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from "ws";
import { wsConnection } from "./src/ws/handler";

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port`);
httpServer.listen(HTTP_PORT);

// websocket соединение
const wss = new WebSocketServer({ port: WSS_PORT });
console.log(`Start Websocket server on the ${WSS_PORT} port`);
wss.on('connection', wsConnection);

process.on("SIGNINT", () => {
    console.log("Websocket server is closed");
    wss.close();
    process.exit(0);
});