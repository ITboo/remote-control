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
exports.position = void 0;
const nut_js_1 = require("@nut-tree/nut-js");
//Send mouse coordinates <- mouse_position -> mouse_position {x px},{y px}
const position = (x, y) => __awaiter(void 0, void 0, void 0, function* () {
    const target = new nut_js_1.Point(x, y);
    yield nut_js_1.mouse.move((0, nut_js_1.straightTo)(target));
});
exports.position = position;
//# sourceMappingURL=position.js.map