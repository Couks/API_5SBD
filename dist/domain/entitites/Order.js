"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = exports.Order = void 0;
class Order {
    constructor(orderId, customerId, items, purchaseDate, paymentsDate) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.items = items;
        this.purchaseDate = purchaseDate;
        this.paymentsDate = paymentsDate;
    }
}
exports.Order = Order;
class OrderItem {
    constructor(productId, quantity, price) {
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }
}
exports.OrderItem = OrderItem;
