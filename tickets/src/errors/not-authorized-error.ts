import { IErrorResponse } from "../types/error-response";
import { CustomError } from "./custom-error";
class NotAuthorizedError extends CustomError {
  statusCode: number = 401;
  constructor() {
    super('You are not authorized')
  }

  serializeError(): IErrorResponse[] {
      return [{message: 'You are not authorized'}]
  }
}

export { NotAuthorizedError }