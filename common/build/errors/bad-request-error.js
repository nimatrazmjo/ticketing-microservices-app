"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const custom_error_1 = require("./custom-error");
class BadRequestError extends custom_error_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.message = message;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serializeError() {
        return [{ message: this.message }];
    }
}
exports.BadRequestError = BadRequestError;
