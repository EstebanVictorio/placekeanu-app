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

- Otherwise, create a Docker network called `net` via any of the following command:


```
  docker network create net
  
  # or...

  yarn network:create
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

- Now, you have two options:

  - Running the Apollo Server on your machine directly via the following:
  Run `yarn kql:dev` from the root of the project repo folder and that will make the Apollo Server available at `http://localhost:8000`.

  - Running the Apollo Server on your machine via Docker. This is a bit longer:

    - Since the Apollo Server is on Docker, the approach taken here is to create the `net` network. As per Docker Docs, is not recommended for apps to rely on the default network, so for this scenario we have to communicate both container services through it. So, this is has a longer chore list to be done:

      - For this, you need to ensure to have created the cache in a container, and inspect its IP Address in the `net` network.

      - Once you see it, copy it and pass it as an env var to the command in the `scripts/docker/run/kql.sh` bash script file so when you run it, the container recognizes it as an env var inside the Apollo Server for the cache host.

      - This is usually not a problem, but, depending on how you attempted to run the code, you might just want to pass all the required env vars (`REDIS_HOST`, `REDIS_PASSWORD`, `REDIS_PORT`, `API_URL`) if you by any chance run the local machine command first, and then transitioned to the container way to do it. If this was the case, you might only need to pass the `REDIS_HOST` from the previous step to the command in the aforementioned script
      and that's it.

      - Then, build the Apollo server container image with the appropriate env vars using the the following command from the root of the project repo folder: `yarn kql:docker:build`

      - Now, you can run the Apollo Server using the following command from the root of the project repo folder: `yarn kql:docker:run`

      - A brief explanation to this is that I tested several ways to run this, and added the `dotenv` dependency just as a fast way to test stuff in the host environment before loading everything into a container, so, `REDIS_HOST` might get in the way if you explored this path.

Depending on which method you'd like to follow, is how you might end up running all the services, but to keep it brief, we'll leave it at that. If you have a better way to do it, please do so! I'm also open to hear some suggestions.

As a side note: one way that is not explored here in these instructions is if you had the cache outside of a container, but the Apollo Server did was in a container.

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