import express from "express";
import ordersController from "../controllers/orders.js";

const router = express.Router();

router.get("/", ordersController.readAll);
router.post("/", ordersController.create);

router.get("/:orderID", ordersController.readOne);
router.post("/:orderID", ordersController.addDriverToOrder);

router.put("/:orderID", ordersController.update);
router.delete("/:orderID", ordersController.delete);

export default router;