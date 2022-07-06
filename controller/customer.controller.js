import * as CustomerService from "../services/customer.service.js";

export const getAll = async (req, res) => {
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);
    try {
        const customer = await CustomerService.getCustomers({}, page, limit);
        return res.send(customer);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await CustomerService.getCustomerById(id);
        if (customer === null) {
            return res.status(404).send({ message: "Can't found customer with Id " + id });
        }
        return res.send(customer);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const { deletedCount } = await CustomerService.deleteCustomer({ _id: id });
        if (deletedCount === 0) {
            return res.status(404).send({ message: "Can't found customer to delete with Id " + id });
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const create = async (req, res) => {
    const { name, age, email, address, phone, peoples, createdAt, events } = req.body;
    try {
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
        return res.status(201).send(customer);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const replace = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, address, phone, peoples, createdAt, events } = req.body;
    try {
        const customer = await CustomerService.replaceCustomer(
            { _id: id },
            {
                name,
                age,
                email,
                address,
                phone,
                peoples,
                createdAt,
                events,
            }
        );
        if (customer === null) {
            return res.status(404).send({ message: "Can't found customer with Id " + id });
        }
        return res.send(customer);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const update = async (req, res) => {
    const { id } = req.params;
    const { name, age, email, address, phone, peoples, createdAt, events } = req.body;

    try {
        const customer = await CustomerService.updateCustomer(id, {
            ...(name !== undefined && { name }),
            ...(age !== undefined && { age }),
            ...(email !== undefined && { email }),
            ...(address !== undefined && { address }),
            ...(phone !== undefined && { phone }),
            ...(peoples !== undefined && { peoples }),
            ...(createdAt !== undefined && { createdAt }),
            ...(events !== undefined && { events }),
        });

        if (customer === null) {
            return res.status(404).send({ message: "Can't found customer with Id " + id });
        }
        return res.send(customer);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};
