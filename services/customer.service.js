import Customer from "../models/customer.model.js";

export const getCustomer = (filter) => Customer.find(filter);
export const getCustomerById = (filter) => Customer.findById(filter);
export const createCustomer = (customerData) => {
    const customer = new Customer(customerData);
    return customer.save();
};
export const deleteCustomer = (filter) => Customer.deleteOne(filter);