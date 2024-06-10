import { Customer } from "../domain/entities/Customer";

export interface ICustomerService {
  createCustomer(customerData: any): Promise<Customer>;
  getCustomerById(customerId: string): Promise<Customer | null>;
  getAllCustomers(): Promise<Customer[]>;
  updateCustomer(
    customerId: string,
    customerData: any
  ): Promise<Customer | null>;
  deleteCustomer(customerId: string): Promise<boolean>;
}
