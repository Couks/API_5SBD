// Arquivo: infrastructure/repositories/PrismaProductRepository.ts

import { PrismaClient } from "@prisma/client";
import { IProductRepository } from "../../domain/interfaces/IProductRepository";
import { Product } from "../../domain/entities/Product";

export class PrismaProductRepository implements IProductRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async findBySku(sku: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { sku } });
  }

  async create(productData: Partial<Product>): Promise<Product> {
    return await this.prisma.product.create({ data: productData });
  }

  async update(
    id: number,
    productData: Partial<Product>
  ): Promise<Product | null> {
    return await this.prisma.product.update({
      where: { id },
      data: productData,
    });
  }

  async delete(id: number): Promise<boolean> {
    const deletedProduct = await this.prisma.product.delete({ where: { id } });
    return !!deletedProduct;
  }

  async list(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }
}
