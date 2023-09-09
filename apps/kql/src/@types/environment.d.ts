declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL?: string
      NODE_ENV: "development" | "production" | "local"
      REDIS_PORT?: string
      REDIS_HOST?: string
      REDIS_PASSWORD?: string
    }
  }
}

export {}
