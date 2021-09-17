import dotenv from "dotenv";
import express from "express";
import database from "./lib/database.js";
import ordersRouter from "./routers/orders.js";
dotenv.config();

database.init();

const server = express();

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use("/orders", ordersRouter);
// server.use("/users", usersRouter);
// server.use("/products", usersRouter);