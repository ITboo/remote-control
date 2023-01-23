"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/http_server/index");
const ws_1 = require("ws");
//import dotenv from 'dotenv';
const HTTP_PORT = 8181;
const WSS_PORT = 8080;
console.log(`Start static http server on the ${HTTP_PORT} port!`);
index_1.httpServer.listen(HTTP_PORT);
// websocket соединение
const wss = new ws_1.WebSocketServer({ port: WSS_PORT });
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
//# sourceMappingURL=index.js.map