import { CustomError } from "../errors/custom-error";
import { ErrorResponseType } from "../errors/error-response-type";
export declare class RequireAuth extends CustomError {
    statusCode: number;
    constructor();
    serializeError(): ErrorResponseType[];
}
