import { IErrorResponse } from "../types/error-response";
import { CustomError } from "./custom-error";

export class DBConnectionError extends CustomError {
  statusCode = 502;
  
  constructor(message = 'Database connection error') {
    super(message);
  }

  serializeError(): IErrorResponse[] {
      return [{
        message: this.message
      }]
  }
}