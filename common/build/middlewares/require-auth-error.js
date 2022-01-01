"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireAuth = void 0;
const custom_error_1 = require("../errors/custom-error");
class RequireAuth extends custom_error_1.CustomError {
    constructor() {
        super("You are not authorized");
        this.statusCode = 401;
    }
    serializeError() {
        return [{ message: "You are not authorized" }];
    }
}
exports.RequireAuth = RequireAuth;
