import Event from "../models/event.model.js";

export const getEvents = (filter, page, limit) => {
    try {
        return Event.find(filter)
            .sort("-creationDate")
            .skip(page * limit)
            .limit(limit);
    } catch (e) {
        throw Error("Error while Paginating Events");
    }
};

export const getCountEvents = (filter) => {
    try {
        return Event.count(filter);
    } catch (e) {
        throw Error("Error while find count of Events");
    }
};

export const getEventById = (id) => {
    try {
        return Event.findById(id);
    } catch (error) {
        throw Error("Fail when try to find Event with Id " + id);
    }
};

export const deleteEvent = (filter) => {
    try {
        return Event.deleteOne(filter);
    } catch (error) {
        throw Error("Fail when try to delete Event with Id " + id);
    }
};

export const createEvent = (eventData) => {
    try {
        const event = new Event(eventData);
        return event.save();
    } catch (error) {
        throw Error("Fail when try to create Event");
    }
};

export const replaceEvent = (filter, eventData) => {
    try {
        return Event.findOneAndReplace(filter, eventData, { new: true });
    } catch (error) {
        throw Error("Fail when try to replace Event with Id " + id);
    }
};

export const updateEvent = (id, eventData) => {
    try {
        return Event.findByIdAndUpdate(id, eventData, { new: true });
    } catch (error) {
        throw Error("Fail when try to update Event with Id " + id);
    }
};
