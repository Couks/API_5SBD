import { Order } from "../domain/entities/Order";
import { OrderItem } from "../domain/entities/OrderItem";

export interface IOrderService {
  createOrder(orderData: any): Promise<Order>;
  getOrderById(orderId: string): Promise<Order | null>;
  getAllOrders(): Promise<Order[]>;
  updateOrder(orderId: string, orderData: any): Promise<Order | null>;
  deleteOrder(orderId: string): Promise<boolean>;
  addItemToOrder(orderId: string, itemData: any): Promise<OrderItem>;
  updateOrderItem(
    orderItemId: string,
    itemData: any
  ): Promise<OrderItem | null>;
  removeItemFromOrder(orderItemId: string): Promise<boolean>;
}
