"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const client_1 = require("@prisma/client");
const Order_1 = require("../../domain/entities/Order");
const prisma = new client_1.PrismaClient();
class OrderRepository {
    async findById(orderId) {
        const order = await prisma.order.findUnique({
            where: { orderId },
            include: { items: true },
        });
        if (!order) {
            return null;
        }
        const orderItems = order.items.map((item) => new Order_1.OrderItem(item.productId, item.quantity, item.price));
        return new Order_1.Order(order.orderId, order.customerId, orderItems, order.purchaseDate, order.paymentsDate);
    }
    async save(order) {
        await prisma.order.create({
            data: {
                orderId: order.orderId,
                customerId: order.customerId,
                purchaseDate: order.purchaseDate,
                paymentsDate: order.paymentsDate,
                items: {
                    create: order.items.map((item) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price,
                    })),
                },
            },
        });
    }
}
exports.OrderRepository = OrderRepository;
