# placekeanu-app: A Keanu Reeves Image Gallery app


## Installation and run

### Installation Prerequisites:

- Node.js (18.15.0 and onwards)
- Yarn (stable version, not classic, see [instructions](https://yarnpkg.com/getting-started/install) for how to set stable version)
- Docker (Daemon and Compose)


### Important note

This project is a monorepo to keep all codebases in the same repository.

### Steps to run

Once your prerequisites are in place, you can proceed to the apps:

#### Backend

##### Quickstart (after pre-requisites installed):

1. Install all dependencies by running `yarn` from **the root of the project repo folder**.

2. Run `docker compose up` from the from **the root of the project repo folder**.

3. After that, containers for backend and cache should be running and communicating across the `net` network. This should make the backend available at `http://localhost:8000` and ready to go. After that, you can pass to the Frontend section.


#### Frontend

1. Create an `.env.local` environment variable file in `apps/got-keanu` with the following content:

```
GRAPHQL_URL="http://localhost:8000"
```

3. Run `yarn got-keanu:genql` to generate [GenQL client](https://genql.dev/) for Backend fetch operations to be enabled in the frontend from **the root of the project repo folder**.

4. Finally, after those steps are in place, you can run `yarn got-keanu:dev` from **the root of the project repo folder** to make the project available at the following url: `http://localhost:3000`.


### Future improvements and features

- Possibly decoupled the cache from the backend so, if for any reason cache is not available, at least not interrupt the service, but this might be debatable, so, leaving as dependency for now.

- Probably add a MinIO instance to lengthen the cache period of the images, so instead of hitting the API by using images URLs, provide the requests with the URL from the images stored in the MinIO bucket. Although, this is debatable due to adding complexity caching layers on top of an already set up from the Place Keanu service.

- Add the GenQL client generation to scripts for CI processes rather than generating it manually.

- Add purging mutation resolvers to clean cache for certain operations to the GraphQL Server.

- There are some client-side validations towards APIs available only in the browser. This is to provide a codebase that can be a little bit easier to migrate to meta frameworks that could be deployed to the edge due to agnostic runtime adapters availables, such as Remix.