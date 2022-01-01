"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const database_connection_error_1 = require("../errors/database-connection-error");
const request_validation_error_1 = require("../errors/request-validation-error");
const ErrorHandler = (err, req, res, next) => {
    if (err instanceof request_validation_error_1.RequestValidationError) {
        return res.status(400).json({ errors: err.serializeError() });
    }
    if (err instanceof database_connection_error_1.DatabaseConnectionError) {
        return res.status(500).json({ errors: err.serializeError() });
    }
    res.status(err.statusCode).json({
        errors: err.serializeError()
    });
};
exports.ErrorHandler = ErrorHandler;
