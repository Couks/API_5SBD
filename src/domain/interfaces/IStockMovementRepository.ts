import { StockMovement } from "../entities/StockMovement";

export interface IStockMovementRepository {
  findById(stockMovementId: number): Promise<StockMovement | null>;
  findAll(): Promise<StockMovement[]>;
  create(stockMovementData: any): Promise<StockMovement>;
  update(
    stockMovementId: number,
    stockMovementData: any
  ): Promise<StockMovement | null>;
  delete(stockMovementId: number): Promise<boolean>;
}
