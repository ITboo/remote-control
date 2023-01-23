"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wsHandler = void 0;
const move_1 = require("../commands/move");
const common_1 = require("../common/common");
const errors_1 = require("../common/errors");
function wsHandler(wsStream, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const [command, ...args] = data.toString().split(' ');
        const { x, y } = yield common_1.mousePosition;
        let wsResponse = command;
        switch (command) {
            case ('mouse_up'):
                {
                    yield (0, move_1.moveUp)(y);
                    wsStream.write(`mouse_up_${y}`);
                    break;
                }
                ;
            case ('mouse_down'):
                {
                    yield (0, move_1.moveDown)(y);
                    wsStream.write(`mouse_down_${y}`);
                    break;
                }
                ;
            case ('mouse_left'):
                {
                    yield (0, move_1.moveLeft)(x);
                    wsStream.write(`mouse_left_${x}`);
                    break;
                }
                ;
            case ('mouse_right'):
                {
                    yield (0, move_1.moveRight)(x);
                    wsStream.write(`mouse_right_${x}`);
                    break;
                }
                ;
            /*case ('position'): {
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
                errors_1.COMMAND_ERROR;
            }
        }
    });
}
exports.wsHandler = wsHandler;
;
//# sourceMappingURL=handler.js.map