"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controlers_1 = require("./controlers");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const controller = new controlers_1.AuthController(); // 2
        // Definir todas mis rutas especificas
        router.post('/login', controller.loginUser); // 3
        router.post('/register', controller.registerUser); // 4
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
