import { IErrorResponse } from "../types/error-response";
import { CustomError } from "./custom-error";

class ValidationError extends CustomError {
  statusCode = 422;
  constructor(public errors: IErrorResponse[]) {
    super()
  }

  serializeError(): IErrorResponse[] {
      return []
  }
}

export { ValidationError }