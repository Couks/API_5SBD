// src/infrastructure/repositories/PrismaOrderRepository.ts
import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/interfaces/IOrderRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaOrderRepository implements IOrderRepository {
  async create(orderData: any) {
    const createdOrder = await prisma.order.create({
      data: {
        orderId: orderData.orderId,
        purchaseDate: orderData.purchaseDate,
        paymentsDate: orderData.paymentsDate,
        customerId: orderData.customerId,
      },
    });
    return createdOrder;
  }

  async findById(orderId: string) {
    const order = await prisma.order.findUnique({
      where: {
        orderId: orderId,
      },
      include: {
        customer: true,
        items: true,
      },
    });
    return order;
  }

  async findAll() {
    const orders = await prisma.order.findMany({
      include: {
        customer: true,
        items: true,
      },
    });
    return orders;
  }

  async update(orderId: string, orderData: any) {
    const updatedOrder = await prisma.order.update({
      where: {
        orderId: orderId,
      },
      data: {
        purchaseDate: orderData.purchaseDate,
        paymentsDate: orderData.paymentsDate,
        // Atualizar outros campos conforme necessário
      },
    });
    return updatedOrder;
  }

  async delete(orderId: string) {
    const deletedOrder = await prisma.order.delete({
      where: {
        orderId: orderId,
      },
    });
    return deletedOrder;
  }

  async addItemToOrder(orderId: string, itemData: any) {
    const addedItem = await prisma.orderItem.create({
      data: {
        orderId: orderId,
        productId: itemData.productId,
        quantity: itemData.quantity,
        price: itemData.price,
        // Adicionar outros campos conforme necessário
      },
    });
    return addedItem;
  }

  async updateOrderItem(orderItemId: string, itemData: any) {
    const updatedItem = await prisma.orderItem.update({
      where: {
        id: parseInt(orderItemId),
      },
      data: {
        quantity: itemData.quantity,
        price: itemData.price,
        // Atualizar outros campos conforme necessário
      },
    });
    return updatedItem;
  }

  async removeItemFromOrder(orderItemId: string) {
    const deletedItem = await prisma.orderItem.delete({
      where: {
        id: parseInt(orderItemId),
      },
    });
    return deletedItem;
  }
}
