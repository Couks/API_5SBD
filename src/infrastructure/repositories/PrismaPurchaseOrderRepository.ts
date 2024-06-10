import { PrismaClient } from "@prisma/client";
import { IPurchaseOrderRepository } from "../../domain/interfaces/IPurchaseOrderRepository";
import { PurchaseOrder } from "../../domain/entities/PurchaseOrder";

export class PrismaPurchaseOrderRepository implements IPurchaseOrderRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findById(id: number): Promise<PurchaseOrder | null> {
    return await this.prisma.purchaseOrder.findUnique({ where: { id } });
  }

  async create(
    purchaseOrderData: Partial<PurchaseOrder>
  ): Promise<PurchaseOrder> {
    return await this.prisma.purchaseOrder.create({ data: purchaseOrderData });
  }

  async list(): Promise<PurchaseOrder[]> {
    return await this.prisma.purchaseOrder.findMany();
  }
}
