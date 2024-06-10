import { OrderItem } from "./OrderItem";
import { PurchaseOrder } from "./PurchaseOrder";
import { StockMovement } from "./StockMovement";

export interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  stock: number;
  orderItems: OrderItem[];
  stockMovements: StockMovement[];
  purchaseOrders: PurchaseOrder[];
}
