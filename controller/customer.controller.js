import * as CustomerService from "../services/customer.service.js";
import * as EventService from "../services/event.service.js";

export const getAll = async (req, res) => {
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);
    try {
        const customers = await CustomerService.getCustomers({}, page, limit);
        const countCustomers = await CustomerService.getCountCustomers({});
        res.setHeader("X-Total", countCustomers);
        return res.send(customers);
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

export const getCustomerEventsId = async (req, res) => {
    const { id } = req.params;
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);
    try {
        const events = await EventService.getEvents({ customers: id }, page, limit);
        const countEvents = await EventService.getCountEvents({ customers: id });
        res.setHeader("X-Total", countEvents);
        return res.send(events);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const getMajorMinor = async (req, res) => {
    try {
        const customerMajor = await CustomerService.countPeopleBySexe();
        return res.send(customerMajor);
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
    const { name, email, address, phone, peoples, events } = req.body;
    try {
        const customer = await CustomerService.createCustomer({
            name,
            email,
            address,
            phone,
            peoples,
            events,
        });
        return res.status(201).send(customer);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const replace = async (req, res) => {
    const { id } = req.params;
    const { name, email, address, phone, peoples, events } = req.body;
    try {
        const customer = await CustomerService.replaceCustomer(
            { _id: id },
            {
                name,

                email,
                address,
                phone,
                peoples,
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
    const { name, email, address, phone, peoples, events } = req.body;

    try {
        const customer = await CustomerService.updateCustomer(id, {
            ...(name !== undefined && { name }),
            ...(email !== undefined && { email }),
            ...(address !== undefined && { address }),
            ...(phone !== undefined && { phone }),
            ...(peoples !== undefined && { peoples }),
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
