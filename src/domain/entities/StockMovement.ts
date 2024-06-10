import { Product } from "./Product";

export interface StockMovement {
  id: number;
  quantity: number;
  createdAt: Date;
  product: Product;
}
