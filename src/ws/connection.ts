import { Duplex } from 'stream';
import WebSocket, { createWebSocketStream } from 'ws';
import { wsHandler } from './handler';

export function wsConnection(ws: WebSocket): void {
    const wsStream: Duplex = createWebSocketStream(ws, { encoding: "utf8" });

    wsStream.on("data", async (data) => {
        await wsHandler(wsStream, data);
    });

    ws.on("close", () => {
        console.log("Connection closed");
    });
};

