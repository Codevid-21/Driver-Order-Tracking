import express from "express";
import ordersController from "../controllers/orders.js";
import validateOrder from "../middlewares/validateOrder.js";

const router = express.Router();

router.post("/", validateOrder, ordersController.create);

// Login yazildiktan sonra kontrol icin middleware yazilacak.  
router.get("/", ordersController.readAll);

router.get("/:orderID", ordersController.readOne);
router.post("/:orderID", ordersController.addDriverToOrder);

router.put("/:orderID", ordersController.update);
router.delete("/:orderID", ordersController.delete);

export default router;