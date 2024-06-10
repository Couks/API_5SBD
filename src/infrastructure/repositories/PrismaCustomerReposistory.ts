import { PrismaClient } from "@prisma/client";
import { ICustomerRepository } from "../../domain/interfaces/ICustomerRepository";
import { Customer } from "../../domain/entities/Customer";

export class PrismaCustomerRepository implements ICustomerRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findById(id: number): Promise<Customer | null> {
    return await this.prisma.customer.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<Customer | null> {
    return await this.prisma.customer.findUnique({ where: { email } });
  }

  async create(customerData: Partial<Customer>): Promise<Customer> {
    return await this.prisma.customer.create({ data: customerData });
  }

  async update(
    id: number,
    customerData: Partial<Customer>
  ): Promise<Customer | null> {
    return await this.prisma.customer.update({
      where: { id },
      data: customerData,
    });
  }

  async delete(id: number): Promise<boolean> {
    const deletedCustomer = await this.prisma.customer.delete({
      where: { id },
    });
    return !!deletedCustomer;
  }

  async list(): Promise<Customer[]> {
    return await this.prisma.customer.findMany();
  }
}
