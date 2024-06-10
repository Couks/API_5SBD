import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";

export interface IOrderRepository {
  create(orderData: any): Promise<Order>;
  findById(orderId: string): Promise<Order | null>;
  findAll(): Promise<Order[]>;
  update(orderId: string, orderData: any): Promise<Order | null>;
  delete(orderId: string): Promise<boolean>;

  addItemToOrder(orderId: string, itemData: any): Promise<OrderItem>;
  updateOrderItem(
    orderItemId: string,
    itemData: any
  ): Promise<OrderItem | null>;
  removeItemFromOrder(orderItemId: string): Promise<boolean>;
}
