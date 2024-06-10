// src/presentation/routes/OrderRoutes.ts

import express, { Router } from "express";
import { OrderController } from "../controllers/OrderController";

export function OrderRoutes(orderController: OrderController): Router {
  const router = express.Router();

  router.post("/orders", (req, res) => orderController.createOrder(req, res));
  router.get("/orders/:orderId", (req, res) =>
    orderController.getOrderById(req, res)
  );
  router.put("/orders/:orderId", (req, res) =>
    orderController.updateOrder(req, res)
  );
  router.delete("/orders/:orderId", (req, res) =>
    orderController.deleteOrder(req, res)
  );

  router.post("/orders/:orderId/items", (req, res) =>
    orderController.addItemToOrder(req, res)
  );
  router.put("/orders/items/:orderItemId", (req, res) =>
    orderController.updateOrderItem(req, res)
  );
  router.delete("/orders/items/:orderItemId", (req, res) =>
    orderController.removeItemFromOrder(req, res)
  );

  return router;
}
