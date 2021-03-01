// import express = require("express");
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as BodyParser from 'body-parser';
import * as express from "express";
import * as cors from "cors";
import postRoutes from "./routes/postRoutes";
import bearerToken = require("express-bearer-token");
import { oktaAuth } from "./auth";

createConnection().then(async connection => {
    const app = express();
    app.use(BodyParser.json());
    // app.use(bearerToken());
    // app.use(oktaAuth);
    app.use(cors());
    
    app.use('/', postRoutes);

    app.listen(3000, () => console.log("App is running at port 3000"));
    
}).catch(error => console.log(error));
