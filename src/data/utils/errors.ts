export class HTTPError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
    if (Error.captureStackTrace) Error.captureStackTrace(this, HTTPError);
  }
}
