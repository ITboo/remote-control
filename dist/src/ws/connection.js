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
exports.wsConnection = void 0;
const ws_1 = require("ws");
const handler_1 = require("./handler");
function wsConnection(ws) {
    const wsStream = (0, ws_1.createWebSocketStream)(ws, { encoding: "utf8" });
    wsStream.on("data", (data) => __awaiter(this, void 0, void 0, function* () {
        yield (0, handler_1.wsHandler)(wsStream, data);
    }));
    ws.on("close", () => {
        console.log("Connection closed");
    });
}
exports.wsConnection = wsConnection;
;
//# sourceMappingURL=connection.js.map