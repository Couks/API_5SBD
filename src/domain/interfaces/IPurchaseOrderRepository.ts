import { PurchaseOrder } from "../entities/PurchaseOrder";

export interface IPurchaseOrderRepository {
  findById(purchaseOrderId: number): Promise<PurchaseOrder | null>;
  findAll(): Promise<PurchaseOrder[]>;
  create(purchaseOrderData: any): Promise<PurchaseOrder>;
  update(
    purchaseOrderId: number,
    purchaseOrderData: any
  ): Promise<PurchaseOrder | null>;
  delete(purchaseOrderId: number): Promise<boolean>;
}
