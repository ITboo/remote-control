import { httpServer } from "./http_server/index.js";
import { WebSocketServer } from "ws";
//import dotenv from 'dotenv';

const HTTP_PORT = 8181;
const WSS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

// websocket соединение
const wss = new WebSocketServer({port: WSS_PORT});
wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');
});
/*
process.on("SIGNINT", () => {
    console.log("Closed");
    wss.close();
    process.exit(0);
  });*/