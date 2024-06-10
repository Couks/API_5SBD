import { Product } from "../entities/Product";

export interface IProductRepository {
  findById(productId: number): Promise<Product | null>;
  findBySku(sku: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  create(productData: any): Promise<Product>;
  update(productId: number, productData: any): Promise<Product | null>;
  delete(productId: number): Promise<boolean>;
}
