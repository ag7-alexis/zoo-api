import * as CustomerService from "../services/customer.service.js";

export const getAll = async (req, res) => {
    const customer = await CustomerService.getCustomer({});
    res.send(customer);
};

export const getById = async (req, res) => {
    const customer = await CustomerService.getCustomerById({_id: req.params.id});
    res.send(customer);
};

export const create = async (req, res) => {
    const { name, age, email, address, phone, peoples, createdAt, events } = req.body;
    const customer = await CustomerService.createCustomer({
        name,
        age,
        email,
        address,
        phone,
        peoples,
        createdAt,
        events,
    });
    res.send(customer);
};

export const deleteById = async (req, res) => {
    const { id } = req.params;
    await CustomerService.deleteCustomer({ _id: id });
    res.send();
};