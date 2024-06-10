"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const Order_1 = require("../../domain/entitites/Order");
class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createOrder(req, res) {
        const { orderId, customerId, items, purchaseDate, paymentsDate } = req.body;
        const orderItems = items.map((item) => new Order_1.OrderItem(item.productId, item.quantity, item.price));
        const order = new Order_1.Order(orderId, customerId, orderItems, new Date(purchaseDate), new Date(paymentsDate));
        await this.orderService.processOrder(order);
        res.status(201).send();
    }
}
exports.OrderController = OrderController;
