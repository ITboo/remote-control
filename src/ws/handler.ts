import { Duplex } from "stream";
import {
    drawSquare,
    drawRectangle,
    drawCircle,
    position,
    moveUp,
    moveDown,
    moveLeft,
    moveRight
} from '../commands/commands';
import { mousePosition } from "../common/common";
import { COMMAND_ERROR } from "../common/errors";

export async function wsHandler(wsStream: Duplex, data: any) {

    const [command, ...args] = data.toString().split(' ');
    const { x, y } = await mousePosition;
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
            wsStream.write(`mouse_left_${y}`);
            break;
        };
        case ('mouse_right'): {
            await moveRight(x);
            wsStream.write(`mouse_right_${y}`);
            break;
        };
        /*case ('position'): {
            await position(x, y)
            break;
        };
        case ('draw_square'): {
            await drawSquare(width: number);
            break;
        };
        case ('draw_rectangle'): {
            await drawRectangle(width: number, length: number);
            break;
        };
        case ('draw_circle'): {
            await drawCircle(radius: number);
            break;
        };
        /*case ('screenshot'): {
            break;
        };*/
        default: {
            COMMAND_ERROR;
        }
    }
};