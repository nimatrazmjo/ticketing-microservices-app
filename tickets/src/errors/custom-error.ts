import { IErrorResponse } from "../types/error-response";

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(message?: string) {
    super(message);
  }
  abstract serializeError(): IErrorResponse[]
}