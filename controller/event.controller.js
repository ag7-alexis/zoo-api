import * as EventService from "../services/event.service.js";

export const getAll = async (_, res) => {
    const events = await EventService.getEvents({});
    res.send(events);
};

export const getById = async (req, res) => {
    const { id } = req.params;
    const event = await EventService.getEventById(id);
    res.send(event);
};

export const deleteById = async (req, res) => {
    const { id } = req.params;
    await EventService.deleteEvent({ _id: id });
    res.send();
};

export const create = async (req, res) => {
    const { title, description, startDate, endDate, countExpectedPeople, location, animals } = req.body;
    const event = await EventService.createEvent({
        title,
        description,
        startDate,
        endDate,
        countExpectedPeople,
        location,
        animals,
    });
    res.send(event);
};

export const replace = async (req, res) => {
    const { id } = req.params;
    const { title, description, startDate, endDate, countExpectedPeople, location, animals } = req.body;
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
        }
    );
    res.send(event);
};

export const update = async (req, res) => {
    const { id } = req.params;
    const { title, description, startDate, endDate, countExpectedPeople, location, animals } = req.body;
    const event = await EventService.updateEvent(id, {
        ...(title && { title }),
        ...(description && { description }),
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(countExpectedPeople && { countExpectedPeople }),
        ...(location && { location }),
        ...(animals && { animals }),
    });
    res.send(event);
};
