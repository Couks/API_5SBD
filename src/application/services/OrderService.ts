// Arquivo: src/application/services/OrderService.ts

import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";
import { Order } from "../../domain/entities/Order";

export class OrderService {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(orderData: any): Promise<Order> {
    if (!orderData.customerId) {
      throw new Error("CustomerId is required to create an order");
    }

    const createdOrder = await this.orderRepository.create(orderData);
    return createdOrder;
  }

  async updateOrder(orderId: string, orderData: any): Promise<Order | null> {
    const existingOrder = await this.orderRepository.findById(orderId);
    if (!existingOrder) {
      return null;
    }

    const updatedOrder = await this.orderRepository.update(orderId, orderData);
    return updatedOrder;
  }

  async deleteOrder(orderId: string): Promise<boolean> {
    const existingOrder = await this.orderRepository.findById(orderId);
    if (!existingOrder) {
      return false;
    }

    const deleted = await this.orderRepository.delete(orderId);
    return deleted;
  }

  async getOrderById(orderId: string): Promise<Order | null> {
    const order = await this.orderRepository.findById(orderId);
    return order;
  }

  async getAllOrders(): Promise<Order[]> {
    const orders = await this.orderRepository.findAll();
    return orders;
  }
}
