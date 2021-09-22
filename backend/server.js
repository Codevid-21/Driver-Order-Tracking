import dotenv from "dotenv";
import express from "express";
import database from "./lib/database.js";
import ordersRouter from "./routers/orders.js";
import usersRouter from "./routers/users.js";
import driversRouter from "./routers/drivers.js";
import errorHandling from "./middlewares/errorHandling.js";
import cors from "cors";

dotenv.config();

database.init();

const server = express();

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/orders", ordersRouter);
server.use("/products", usersRouter);
server.use("/users", usersRouter);
server.use("/drivers", driversRouter);

server.use(errorHandling);