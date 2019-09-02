// [Better error handling in JavaScript - Iain Collins - Medium](https://medium.com/@iaincollins/error-handling-in-javascript-a6172ccdf9af)
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UnauthorizedError'
    this.message = message
  }
}
