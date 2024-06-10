// Arquivo: infrastructure/repositories/PrismaStockMovementRepository.ts

import { PrismaClient } from "@prisma/client";
import { IStockMovementRepository } from "../../domain/interfaces/IStockMovementRepository";
import { StockMovement } from "../../domain/entities/StockMovement";

export class PrismaStockMovementRepository implements IStockMovementRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(
    stockMovementData: Partial<StockMovement>
  ): Promise<StockMovement> {
    return await this.prisma.stockMovement.create({ data: stockMovementData });
  }

  async list(): Promise<StockMovement[]> {
    return await this.prisma.stockMovement.findMany();
  }
}
