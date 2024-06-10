import express from "express";
import { OrderController } from "./presentation/controllers/OrderController";
import { OrderRoutes } from "./presentation/routes/OrderRoutes";
import { PrismaOrderRepository } from "./infrastructure/repositories/PrismaOrderRepository";
import { PrismaClient } from "@prisma/client";
import { IOrderService } from "./application/IOrderService";
import { OrderService } from "./application/services/OrderService";

const prisma = new PrismaClient();
const orderRepository = new PrismaOrderRepository(prisma);
const orderService: IOrderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", OrderRoutes(orderController));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
