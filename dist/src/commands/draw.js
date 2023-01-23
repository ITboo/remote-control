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
exports.drawSquare = exports.drawRectangle = exports.drawCircle = void 0;
const nut_js_1 = require("@nut-tree/nut-js");
nut_js_1.mouse.config.mouseSpeed = 100;
// Draw circle with pushed left button:<- draw_circle {px}
const drawCircle = (r) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.pressButton(nut_js_1.Button.LEFT);
    yield nut_js_1.mouse.releaseButton(nut_js_1.Button.LEFT);
});
exports.drawCircle = drawCircle;
// Draw rectangle with pushed left button:<- draw_rectangle {px} {px}
const drawRectangle = (w, h) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.pressButton(nut_js_1.Button.LEFT);
    yield nut_js_1.mouse.drag((0, nut_js_1.right)(w));
    yield nut_js_1.mouse.drag((0, nut_js_1.down)(h));
    yield nut_js_1.mouse.drag((0, nut_js_1.left)(w));
    yield nut_js_1.mouse.drag((0, nut_js_1.up)(h));
    yield nut_js_1.mouse.releaseButton(nut_js_1.Button.LEFT);
});
exports.drawRectangle = drawRectangle;
// Draw square with pushed left button: <- draw_square {px}
const drawSquare = (w, h = w) => __awaiter(void 0, void 0, void 0, function* () {
    yield nut_js_1.mouse.pressButton(nut_js_1.Button.LEFT);
    yield nut_js_1.mouse.drag((0, nut_js_1.right)(w));
    yield nut_js_1.mouse.drag((0, nut_js_1.down)(h));
    yield nut_js_1.mouse.drag((0, nut_js_1.left)(w));
    yield nut_js_1.mouse.drag((0, nut_js_1.up)(h));
    yield nut_js_1.mouse.releaseButton(nut_js_1.Button.LEFT);
});
exports.drawSquare = drawSquare;
//# sourceMappingURL=draw.js.map