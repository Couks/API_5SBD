"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async processOrder(order) {
        // lógica de processamento de pedido
        await this.orderRepository.save(order);
    }
}
exports.OrderService = OrderService;
