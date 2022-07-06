import * as EventService from "../services/event.service.js";

export const getAll = async (_, res) => {
    const events = await EventService.getEvents({});
    res.send(events);
};
