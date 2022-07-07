import e from "express";
import Customer from "../models/customer.model.js";

export const getCustomers = (filter, page, limit) => {
    try {
        return Customer.find(filter)
            .sort("-creationDate")
            .skip(page * limit)
            .limit(limit);
    } catch (e) {
        throw Error("Error while Paginating Customers");
    }
};

export const getCountCustomers = (filter) => {
    try {
        return Customer.count(filter);
    } catch (e) {
        throw Error("Error while find count of Customers");
    }
};

export const getCustomerById = (id) => {
    try {
        return Customer.findById(id);
    } catch (error) {
        throw Error("Fail when try to find Customer with Id " + id);
    }
};

export const getCustomerEventsById = (id) => {
    try {
        return Customer.findById(id, { events: 1 });
    } catch (error) {
        throw Error("Fail when try to find Customer with Id " + id);
    }
};

export const countPeopleBySexe = () => {
    try {
        return Customer.aggregate([
            {
                $match: {},
            },
            { $project: { peoples: 1 } },
            { $unwind: "$peoples" },
            { $group: { _id: "$peoples.Sexe", count: { $sum: 1 } } },
        ]);
    } catch (error) {
        throw Error("Fail when try to find Customer major or minor");
    }
};

export const deleteCustomer = (filter) => {
    try {
        return Customer.deleteOne(filter);
    } catch (error) {
        throw Error("Fail when try to delete Customer with Id " + id);
    }
};

export const createCustomer = (customerData) => {
    try {
        const customer = new Customer(customerData);
        return customer.save();
    } catch (error) {
        throw Error("Fail when try to create Customer");
    }
};

export const replaceCustomer = (filter, customerData) => {
    try {
        return Customer.findOneAndReplace(filter, customerData, { new: true });
    } catch (error) {
        throw Error("Fail when try to replace Customer with Id " + id);
    }
};

export const updateCustomer = (id, customerData) => {
    try {
        return Customer.findByIdAndUpdate(id, customerData, { new: true });
    } catch (error) {
        throw Error("Fail when try to update Customer with Id " + id);
    }
};
