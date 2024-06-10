"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function updateStockAndOrders() {
    const orders = await prisma.order.findMany({
        include: { items: true, customer: true },
        orderBy: { items: { _sum: { price: "desc" } } },
    });
    for (const order of orders) {
        let canFulfillOrder = true;
        for (const item of order.items) {
            const product = await prisma.product.findUnique({
                where: { id: item.productId },
            });
            if (product && product.stock < item.quantity) {
                canFulfillOrder = false;
                await prisma.purchaseOrder.create({
                    data: {
                        productId: item.productId,
                        quantity: item.quantity - product.stock,
                    },
                });
            }
        }
        if (canFulfillOrder) {
            for (const item of order.items) {
                await prisma.product.update({
                    where: { id: item.productId },
                    data: { stock: { decrement: item.quantity } },
                });
                await prisma.stockMovement.create({
                    data: {
                        productId: item.productId,
                        quantity: item.quantity,
                    },
                });
            }
        }
    }
    console.log("Stock and orders updated.");
}
updateStockAndOrders();
