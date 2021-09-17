import express from "express";
import ordersController from "../controllers/orders.js";
import validateOrder from "../middleware/validateOrder.js";

const router = express.Router();

router.post("/", validateOrder, ordersController.create);

// Login yazildiktan sonra kontrol icin middleware yazilacak.
router.get("/", ordersController.readAll);
router.get("/:orderId", ordersController.readOne);
router.put("/:orderId", ordersController.update);
router.delete("/:orderId", ordersController.delete);

export default router;