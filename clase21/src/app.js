import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

import viewsRouter from "./routes/viewsRouter.js";
import sessionRouter from "./routes/sessionRouter.js";
import __dirname from "../utils.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("views engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

const connection = mongoose.connect(
    "mongodb+srv://monsemu246:coder@cluster0.sqpuvjy.mongodb.net/?retryWrites=true&w=majority"
);

app.use(
    session({
        store: new MongoStore({
            mongoUrl:
            "mongodb+srv://monsemu246:coder@cluster0.sqpuvjy.mongodb.net/?retryWrites=true&w=majority",
            ttle: 3600,
        }),
        secret: "CoderS3cretFeils",
        resave: false,
        saveUninitialized: false,
    })
);

app.use("/", viewsRouter);
app.use("/api/sessions", sessionRouter);

app.listen(3000, () => console.log("Listen"));