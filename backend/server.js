import dotenv from "dotenv";
import express from "express";
import database from "./lib/database.js";
import ordersRouter from "./routers/orders.js";
import usersRouter from "./routers/users.js";
import driversRouter from "./routers/drivers.js";
import customersRouter from "./routers/customers.js";
import errorHandling from "./middlewares/errorHandling.js";
import cookieParser from "cookie-parser";
import checkAuth from "./middlewares/checkAuth.js";
import cors from "cors";

dotenv.config();

database.init();

const server = express();

server.listen(process.env.PORT, () =>
  console.log(`server listening on port ${process.env.PORT}`)
);

const config = {
  origin: 'http://localhost:3000', // zugriff auf cookie des backendserver ermöglichen
  credentials: true, // JS kann Credentials zugreifen. Credentials are cookies, authorization headers, or TLS client certificates.
};
server.use(cors(config));

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/orders", ordersRouter);
server.use("/products", usersRouter);
server.use("/users", usersRouter);
server.use("/drivers", checkAuth, driversRouter);
server.use("/customers", customersRouter);

server.use(errorHandling);