// src/presentation/controllers/OrderController.ts

import { Request, Response } from "express";
import { IOrderService } from "../../application/IOrderService";

export class OrderController {
  constructor(private orderService: IOrderService) {}

  async createOrder(req: Request, res: Response) {
    try {
      const order = await this.orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const orderId = req.params.orderId;
      const order = await this.orderService.getOrderById(orderId);
      if (!order) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.status(200).json(order);
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const orderId = req.params.orderId;
      const updatedOrder = await this.orderService.updateOrder(
        orderId,
        req.body
      );
      if (!updatedOrder) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.status(200).json(updatedOrder);
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteOrder(req: Request, res: Response) {
    try {
      const orderId = req.params.orderId;
      const result = await this.orderService.deleteOrder(orderId);
      if (!result) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.status(204).send();
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async addItemToOrder(req: Request, res: Response) {
    try {
      const orderId = req.params.orderId;
      const newItem = await this.orderService.addItemToOrder(orderId, req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateOrderItem(req: Request, res: Response) {
    try {
      const orderItemId = req.params.orderItemId;
      const updatedItem = await this.orderService.updateOrderItem(
        orderItemId,
        req.body
      );
      if (!updatedItem) {
        res.status(404).json({ error: "Order item not found" });
      } else {
        res.status(200).json(updatedItem);
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async removeItemFromOrder(req: Request, res: Response) {
    try {
      const orderItemId = req.params.orderItemId;
      const result = await this.orderService.removeItemFromOrder(orderItemId);
      if (!result) {
        res.status(404).json({ error: "Order item not found" });
      } else {
        res.status(204).send();
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
