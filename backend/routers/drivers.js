import express from "express";
import driversController from "../controllers/drivers.js";

const router = express.Router();

router.post("/", driversController.create);

router.get("/", driversController.readAll);

router.get("/:driverID", driversController.readOne);
router.post("/:driverID", driversController.addOrderToDriver);

router.put("/:driverID", driversController.update);
router.delete("/:driverID", driversController.delete);

export default router;