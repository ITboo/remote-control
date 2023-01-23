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
exports.moveDown = exports.moveRight = exports.moveUp = exports.moveLeft = void 0;
const nut_js_1 = require("@nut-tree/nut-js");
// Move mouse left <- mouse_left {x px}
const moveLeft = (x) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.move((0, nut_js_1.left)(x));
});
exports.moveLeft = moveLeft;
// Move mouse up <- mouse_up {y px}
const moveUp = (y) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.move((0, nut_js_1.up)(y));
});
exports.moveUp = moveUp;
// Move mouse right <- mouse_right {x px}
const moveRight = (x) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.move((0, nut_js_1.right)(x));
});
exports.moveRight = moveRight;
// Move mouse down<- mouse_down {y px}
const moveDown = (y) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.move((0, nut_js_1.down)(y));
});
exports.moveDown = moveDown;
//# sourceMappingURL=move.js.map