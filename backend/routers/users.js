import express from "express";
import usersController from "../controllers/users.js";

const router = express.Router();

// router.post("/", driversController.create);

router.get("/", usersController.readAll);

router.get("/:userID", usersController.readOne);
// router.post("/:driverID", driversController.addOrderToDriver);

// router.put("/:driverID", driversController.update);
// router.delete("/:driverID", driversController.delete);

export default router;