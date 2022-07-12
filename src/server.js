import express, { application } from "express";
import morgan from "morgan";
import session from "express-session";
import connect from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddeware } from "./middlewares";
import MongoStore from "connect-mongo";
import { connection } from "mongoose";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ client: connection.client }),
  })
);

app.use(localsMiddeware);

app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
