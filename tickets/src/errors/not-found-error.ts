import { CustomError } from "../errors/custom-error";
import { IErrorResponse } from "../types/error-response";

class NotFoundError extends CustomError {
  statusCode= 404;
  constructor(message?: string){
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeError(): IErrorResponse[] {
      return[{message: this.message}]
  }
}

export { NotFoundError }