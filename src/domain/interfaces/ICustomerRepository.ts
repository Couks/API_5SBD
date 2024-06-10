import { Customer } from "../entities/Customer";

export interface ICustomerRepository {
  findById(id: number): Promise<Customer | null>;
  findByEmail(email: string): Promise<Customer | null>;
  create(customerData: Partial<Customer>): Promise<Customer>;
  update(id: number, customerData: Partial<Customer>): Promise<Customer | null>;
  delete(id: number): Promise<boolean>;
  list(): Promise<Customer[]>;
}
