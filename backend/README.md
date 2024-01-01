# Slug Shop Backend

Here we have the middleware and Postgres database for Slug Shop. Our middleware is written using express.js and Swagger OpenAPI. Our database is written using Postgres.

## Pre-requisites
- Docker
- Node.js
- TSOA CLI
- Typescript
- .env file

## Getting Started
Firstly, run all the required dependencies by running the following command in the `backend` directory:
```bash
npm install
```

Secondly, still on the `backend` directory, run the following command to start the bash server:
```bash
docker compose up
```

Once done, you can now run the following command to start the development server:
```bash
npm run dev
```
This will listen to any changes that are done in any TS files. 