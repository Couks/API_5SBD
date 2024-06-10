import { Product } from "./Product";

export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  product: Product;
}
