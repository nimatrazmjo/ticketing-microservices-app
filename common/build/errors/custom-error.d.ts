import { ErrorResponseType } from "./error-response-type";
export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message?: string);
    abstract serializeError(): ErrorResponseType[];
}
