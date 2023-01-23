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
import { getScreenShot } from "../commands/prnt_scrn";
import { COMMAND_ERROR } from "../common/errors";
import { mouse } from "@nut-tree/nut-js";

function wsConnection(ws: WebSocket): void {
    const wsStream: Duplex = createWebSocketStream(ws, {
        encoding: "utf8",
        decodeStrings: false
    });

    wsStream.on("data", async (data) => {

        const [command, ...args] = data.toString().split(' ');
        const [a, b] = args.map((arg: any) => parseInt(arg));
        const { x, y } = await mouse.getPosition();

        let wsResponse = command;

        switch (command) {
            case ('mouse_up'): {
                await moveUp(a)
                wsStream.write(`mouse_up_${a}`);
                break;
            };
            case ('mouse_down'): {
                await moveDown(a);
                wsStream.write(`mouse_down_${a}`);
                break;
            };
            case ('mouse_left'): {
                await moveLeft(a);
                wsStream.write(`mouse_left_${a}`);
                break;
            };
            case ('mouse_right'): {
                await moveRight(a);
                wsStream.write(`mouse_right_${a}`);
                break;
            };
            case ('mouse_position'): {
                wsStream.write(`mouse_position ${x},${y}`);
                break;
            };
            
            case ('draw_square'): {
                await drawSquare(a);
                wsStream.write(`${command}_${x}_${y}_${a}}`);
                break;
            };
            /*case ('draw_rectangle'): {
                await drawRectangle(w, h);
                wsStream.write(`${command}_${x}_${y}_${w}_${h}`);
                break;
            };
            case ('draw_circle'): {
                await drawCircle(r);
                wsStream.write(`${command}_${x}_${y}_${r}`);
                break;
            };*/
            case ('prnt_scrn'): {
                const wsBuf = await getScreenShot();
                console.log(`print_scrn ${x}, ${y}, ${200}`);
                wsStream.write(`prnt_scrn ${wsBuf}\0`);
                break;
            };
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

