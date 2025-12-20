1 class ErrorHandler extends Error {
2    constructor(message, statusCode) {
3      super(message);
4      this.statusCode = statusCode;
5    }
6  }
7
8 export { ErrorHandler };
9