import { CustomError } from "./custom-error";
import { ErrorResponseType } from "./error-response-type";
export declare class BadRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeError(): ErrorResponseType[];
}
