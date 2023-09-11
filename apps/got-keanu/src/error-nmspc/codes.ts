const Codes = {
  INVALID_DATA: 'INVALID_DATA',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  NOT_FOUND: 'NOT_FOUND',
} as const

export type Code = keyof typeof Codes

export default Codes