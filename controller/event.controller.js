import * as EventService from "../services/event.service.js";
import * as CustomerService from "../services/customer.service.js";

export const getAll = async (req, res) => {
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);

    try {
        const events = await EventService.getEvents({}, page, limit);
        const countEvents = await EventService.getCountEvents({});
        res.setHeader("X-Total", countEvents);
        return res.send(events);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await EventService.getEventById(id);
        if (event === null) {
            return res.status(404).send({ message: "Can't found event with Id " + id });
        }
        return res.send(event);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const { deletedCount } = await EventService.deleteEvent({ _id: id });
        if (deletedCount === 0) {
            return res.status(404).send({ message: "Can't found event to delete with Id " + id });
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const create = async (req, res) => {
    const { title, description, startDate, endDate, countExpectedPeople, location, animals, customers } = req.body;
    try {
        const event = await EventService.createEvent({
            title,
            description,
            startDate,
            endDate,
            countExpectedPeople,
            location,
            animals,
            customers,
        });
        return res.status(201).send(event);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const replace = async (req, res) => {
    const { id } = req.params;
    const { title, description, startDate, endDate, countExpectedPeople, location, animals, customers } = req.body;
    try {
        const event = await EventService.replaceEvent(
            { _id: id },
            {
                title,
                description,
                startDate,
                endDate,
                countExpectedPeople,
                location,
                animals,
                customers,
            }
        );
        if (event === null) {
            return res.status(404).send({ message: "Can't found event with Id " + id });
        }
        return res.send(event);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const update = async (req, res) => {
    const { id } = req.params;
    const { title, description, startDate, endDate, countExpectedPeople, location, animals, customers } = req.body;

    try {
        const event = await EventService.updateEvent(id, {
            ...(title !== undefined && { title }),
            ...(description !== undefined && { description }),
            ...(startDate !== undefined && { startDate }),
            ...(endDate !== undefined && { endDate }),
            ...(countExpectedPeople !== undefined && { countExpectedPeople }),
            ...(customers !== undefined && { customers }),
            ...(location !== undefined && { location }),
            ...(animals !== undefined && { animals }),
        });

        if (event === null) {
            return res.status(404).send({ message: "Can't found event with Id " + id });
        }
        return res.send(event);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const getCustomerByEventId = async (req, res) => {
    const { id } = req.params;
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);
    try {
        const customers = await CustomerService.getCustomers({ events: id }, page, limit);
        const countCustomers = await CustomerService.getCountCustomers({ events: id });
        res.setHeader("X-Total", countCustomers);
        return res.send(customers);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const getEventNearToAnEventByEventId = async (req, res) => {
    const { id } = req.params;
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);
    const distance = Math.max(parseInt(req.query.distance) || 10000, 1);
    try {
        const event = await EventService.getEventById(id);
        if (event === null) {
            return res.status(404).send({ message: "Can't found event with Id " + id });
        }

        const locationFilter = {
            location: {
                $near: {
                    $maxDistance: distance,
                    $geometry: {
                        type: "Point",
                        coordinates: event.location.coordinates,
                    },
                },
            },
            _id: {
                $ne: id,
            },
        };

        const events = await EventService.getEvents(locationFilter, page, limit);
        const countEvents = await EventService.getCountEvents(locationFilter);
        res.setHeader("X-Total", countEvents);
        return res.send(events);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};
