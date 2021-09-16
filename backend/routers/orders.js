import express from "express";
import ordersController from "../controllers/orders.js";

const router = express.Router();

router.post("/", ordersController.create);
router.get("/", ordersController.readAll);
// router.get("/:orderId", ordersController.readOne);
// router.put("/:orderId", ordersController.update);
// router.delete("/:orderId", ordersController.delete);

export default router;