import { CustomError } from "../errors/custom-error";
import { ErrorResponseType } from "../errors/error-response-type";

export class RequireAuth extends CustomError {
  statusCode: number = 401;

  constructor() {
    super("You are not authorized");
  }
  serializeError(): ErrorResponseType[] {
    return [{ message: "You are not authorized" }];
  }
}
