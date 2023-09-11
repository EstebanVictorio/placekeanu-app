import Codes, { type Code } from "./codes"



export default class AppError extends Error {
  code: Code = Codes.UNKNOWN_ERROR
  additionalInfo: string[] = []

  constructor(code:Code = Codes.UNKNOWN_ERROR, message: string = "App Error", additionalInfo: string[] = []) {
    super(message)
    this.code = code
    this.additionalInfo = additionalInfo
  }
}