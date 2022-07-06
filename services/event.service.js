import Event from "../models/event.model.js";

export const getEvents = (filter) => Event.find(filter);
export const getEventById = (id) => Event.findById(id);
export const deleteEvent = (filter) => Event.deleteOne(filter);
export const createEvent = (eventData) => {
    const event = new Event(eventData);
    return event.save();
};

export const replaceEvent = (filter, eventData) => Event.findOneAndReplace(filter, eventData, { new: true });
export const updateEvent = (id, eventData) => Event.findByIdAndUpdate(id, eventData, { new: true });
