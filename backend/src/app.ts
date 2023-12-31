import express, { json, urlencoded, Request as ExRequest, Response as ExResponse, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../api/routes";
import fs from 'fs';
import YAML from 'yaml';
import * as path from "path";

export const app = express();
const file  = fs.readFileSync(path.resolve(__dirname, "../api/openapi.yaml"), 'utf8')
const swaggerDocument = YAML.parse(file)

// Use body parser to read sent json payloads
app.use(
    urlencoded({
        extended: true,
    })
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

app.use((req, res, next) => {
    res.status(404).send({ status: "not found" });
});