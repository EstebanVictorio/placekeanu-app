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

This one should be pretty straightforward:

1. Run `yarn upheaval` from the from the root of the project repo folder

2. After that, containers for backend and cache should be running and communicating across the `net` network.

2.5. Local (Optional): If you plan to run the backend outside Docker, keep in mind you'd need to run a standalone DragonflyDB instance in your machine, either by binary or running a Docker container with it. In this repo, you can do so by running the following commands from the root of the project repo folder:

- If you have DragonflyDB installed in your machine (or if you wish to [install it](https://www.dragonflydb.io/docs/getting-started/binary)), you'll need to run the following command in your Terminal: 

```
  dragonfly --logtostderr --requirepass=81p3su28u18 --cache_mode=true -dbnum 1 --port 6379 --save_schedule *:30 --maxmemory=12gb --keys_output_limit=12288 --dbfilename dump.rdb --nodf_snapshot_format
```

- Otherwise, create a Docker network called `net` via the following command:


```
  docker network create net
```

And then run the following commands:

- `yarn cache:docker:build`
- `yarn cache:docker:run`

This will start a DragonflyDB instance in Docker in your local machine via Docker of your binary, depending on your use case.

- After that, you have to create an `.env.local` environment variable file:

- File `apps/kql/.env.local` with the following content:

```
API_URL="https://placekeanu.com"
REDIS_HOST="127.0.0.1"
REDIS_PORT="6379"
REDIS_PASSWORD="81p3su28u18"
```

- Finally, if you followed these steps, run `yarn kql:dev` from the root of the project repo folder and that will make the Apollo Server available at `http://localhost:8000`

#### Frontend

1. Install dependencies by running `yarn` inside the project repo.

2. After that, you have to create an `.env.local` environment variable file:

- File `apps/got-keanu/.env.local` with the following content:

```
GRAPHQL_URL="http://localhost:8000"
```

3. Make sure to run `yarn got-keanu:genql` to generate [GenQL client](https://genql.dev/) for Backend fetch operations to be enabled in the frontend.

4. Finally, after those steps are in place, you can run `yarn got-keanu:dev` from the root of the project repo folder to make the project available at the following url: `http://localhost:3000`. Please keep in mind that for the frontend app to fully work, you'll need to follow the steps in the **Backend** session. Otherwise, you'll be prompted to error pages in the **Frontend** app.


### Future improvements and features

- Possibly decoupled the cache from the backend so, if for any reason cache is not available, at least not interrupt the service, but this might be debatable, so, leaving as dependency for now.

- Probably add a MinIO instance to lengthen the cache period of the images, so instead of hitting the API by using images URLs, provide the requests with the URL from the images stored in the MinIO bucket. Although, this is debatable due to adding complexity caching layers on top of an already set up from the Place Keanu service.

- Add the GenQL client generation to scripts for CI processes rather than generating it manually.

- Add purging mutation resolvers to clean cache for certain operations to the GraphQL Server.

- There are some client-side validations towards APIs available only in the browser. This is to provide a codebase that can be a little bit easier to migrate to meta frameworks that could be deployed to the edge due to agnostic runtime adapters availables, such as Remix.