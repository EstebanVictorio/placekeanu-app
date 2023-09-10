# placekeanu-app: A Keanu Reeves Image Gallery app


## Installation and run

### Installation Prerequisites:

- Node.js (18.15.0 and onwards)
- Yarn (stable version, not classic)
- Docker (Daemon and Compose)


### Important note

This project is a monorepo to keep all codebases in the same repository.

### Steps to run

Once your prerequisites are in place, you can proceed to the apps:

#### Frontend

1. Install dependencies by running `yarn` inside the project repo.

2. After that, you have to create an `.env.local` environment variable file:

- File `apps/got-keanu/.env.local` with the following content:

```
GRAPHQL_URL="http://localhost:8000"
```

3. Finally, after those steps are in place, you can run `yarn got-keanu:dev` from the root of the project repo folder to make the project available at the following url: `http://localhost:3000`. Please keep in mind that for the frontend app to fully work, you'll need to follow the steps in the **Backend** session. Otherwise, you'll be prompted to error pages in the **Frontend** app.



#### Backend


This one should be pretty straightforward:

1. Run `yarn upheaval` from the from the root of the project repo folder

2. After that, containers for backend and cache should be running and communicating across the `net` network.

2.5. Local (Optional): If you plan to run the backend outside Docker, keep in mind you'd need to run a standalone DragonflyDB instance in your machine, either by binary or running a Docker container with it. In this repo, you can do so by running the following commands from the root of the project repo folder:

- `yarn cache:docker:build`
- `yarn cache:docker:run`

This will start a DragonflyDB instance in Docker in your local machine.

- After that, you have to create an `.env.local` environment variable file:

- File `apps/kql/.env.local` with the following content:

```
API_URL="https://placekeanu.com"
REDIS_HOST="127.0.0.1"
REDIS_PORT="6379"
REDIS_PASSWORD="81p3su28u18"
```



### Future improvements and features

- Possibly decoupled the cache from the backend so, if for any reason cache is not available, at least not interrupt the service, but this might be debatable, so, leaving as dependency for now.

- Probably add a MinIO instance to lengthen the cache period of the images, so instead of hitting the API by using images URLs, provide the requests with the URL from the MinIO bucket.