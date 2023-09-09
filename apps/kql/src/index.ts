import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { addResolversToSchema } from "@graphql-tools/schema"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { loadSchemaSync } from "@graphql-tools/load"
import * as Query from "./resolvers/Query/index.js"
import path from "path"
import { default as RedisNamespace } from "ioredis"
import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import responseCachePlugin from "@apollo/server-plugin-response-cache"
import KeyvRedis from "@keyv/redis"
import * as dotenv from "dotenv"

const root = path.resolve()
const schemaPath = path.resolve(root, "src/graphql/schema.graphql")

const env = process.env.NODE_ENV || "local"

const envPath = path.resolve(root, `.env.${env}`)
dotenv.config({ path: envPath })

const schemaFromFile = loadSchemaSync(schemaPath, { loaders: [new GraphQLFileLoader()] })

const schema = addResolversToSchema({
  schema: schemaFromFile,
  resolvers: {
    Query,
  },
})

const { Redis } = RedisNamespace

const redis =
  new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379,
    password: process.env.REDIS_PASSWORD,
  }).on('error', (error) => {
    console.log('[Error on Cache]:', error)
    process.exit(1)
  })

const store = new KeyvRedis(redis)

const cache = new KeyvAdapter(new Keyv({ store }))

const server = new ApolloServer({
  schema,
  cache,
  introspection: true,
  plugins: [
    responseCachePlugin()
  ],
});

;(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT ? parseInt(process.env.PORT, 10) : 8000 },
  })
  console.log(`🚀 Server ready at ${url}`)
})()
