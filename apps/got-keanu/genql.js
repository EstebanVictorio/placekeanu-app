import { generate } from "@genql/cli";

import dotenv from "dotenv"
import path from "path";

const env = process.env.NODE_ENV || "local"
const root = path.resolve()

const envPath = path.resolve(root, `.env.${env}`)

dotenv.config({ path: envPath })
const output = path.resolve("src","gql-client/generated")

generate({
  output,
  endpoint: process.env.GRAPHQL_URL,
}).catch(console.error);