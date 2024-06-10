import { Product } from "./Product";

export interface PurchaseOrder {
  id: number;
  quantity: number;
  createdAt: Date;
  product: Product;
}
