import Event from "../models/event.model.js";

export const getEvents = (filter) => Event.find(filter);
