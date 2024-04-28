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
const envs_1 = require("../src/config/envs");
const routes_1 = require("../src/presentation/routes"); //1
const sever_1 = require("../src/presentation/sever");
(() => {
    main();
})();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // todo: await base de datos
        // todo: inicio de nuestro server
        new sever_1.Server({
            port: envs_1.envs.PORT,
            routes: routes_1.AppRoutes.routes //2
        }).start();
    });
}
