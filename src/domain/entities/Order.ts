// src/domain/entities/Order.ts
import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";

export interface Order {
  id: number;
  orderId: string;
  purchaseDate: Date;
  paymentsDate: Date;
  customer: Customer;
  items: OrderItem[];
}
