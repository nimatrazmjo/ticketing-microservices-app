import  { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode: number = 400;
  constructor (public errors: ValidationError[]) {
    super('Invalid Request validtion');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.map(err=>({message: err.msg,field:err.param}))
  }
}