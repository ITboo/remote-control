import { Duplex } from "stream";
import WebSocket, { createWebSocketStream } from "ws";
import {
    moveUp,
    moveDown,
    moveLeft,
    moveRight
} from '../commands/move';
import {
    drawSquare,
    drawRectangle,
    drawCircle
} from "../commands/draw";
import { COMMAND_ERROR } from "../common/errors";
import { mouse } from "@nut-tree/nut-js";

function wsConnection(ws: WebSocket): void {
    const wsStream: Duplex = createWebSocketStream(ws, {
        encoding: "utf8",
        decodeStrings: false
    });

    wsStream.on("data", async (data) => {

        const [command, ...args] = data.toString().split(' ');
        const { x, y } = await mouse.getPosition();

        let wsResponse = command;

        switch (command) {
            case ('mouse_up'): {
                await moveUp(y)
                wsStream.write(`mouse_up_${y}`);
                break;
            };
            case ('mouse_down'): {
                await moveDown(y);
                wsStream.write(`mouse_down_${y}`);
                break;
            };
            case ('mouse_left'): {
                await moveLeft(x);
                wsStream.write(`mouse_left_${x}`);
                break;
            };
            case ('mouse_right'): {
                await moveRight(x);
                wsStream.write(`mouse_right_${x}`);
                break;
            };
            /*case ('mouse_position'): {
                await position(x, y)
                break;
            };*/
            /*case ('draw_square'): {
                await drawSquare(w, h);
                wsStream.write(`${command}_${x}_${y}_${w}_${h}`);
                break;
            };
            case ('draw_rectangle'): {
                await drawRectangle(w, h);
                wsStream.write(`${command}_${x}_${y}_${w}_${h}`);
                break;
            };
            case ('draw_circle'): {
                await drawCircle(r);
                wsStream.write(`${command}_${x}_${y}_${r}`);
                break;
            };*/
            /*case ('screenshot'): {
                break;
            };*/
            default: {
                await COMMAND_ERROR();
            }
        }
        console.log(`Received: ${data.toString()}`);
    });
    wsStream.on('close', () => {
        wsStream.destroy();
        console.log(`WebSocket closed`);
    });
};

export { wsConnection };

