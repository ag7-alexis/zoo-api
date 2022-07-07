import Event from "../models/event.model.js";
import * as CustomerService from "./customer.service.js";
import * as AnimalService from "./animal.service.js";

export const getEvents = (filter, page, limit) => {
    try {
        return Event.find(filter)
            .sort("-creationDate")
            .skip(page * limit)
            .limit(limit);
    } catch (e) {
        throw new Error("Error while Paginating Events");
    }
};

export const getCountEvents = (filter) => {
    try {
        return Event.count(filter);
    } catch (e) {
        throw new Error("Error while find count of Events");
    }
};

export const getEventById = (id) => {
    try {
        return Event.findById(id);
    } catch (error) {
        throw new Error("Fail when try to find Event with Id " + id);
    }
};

export const deleteEvent = (filter) => {
    try {
        return Event.deleteOne(filter);
    } catch (error) {
        throw new Error("Fail when try to delete Event with Id " + id);
    }
};

export const createEvent = async (eventData) => {
    try {
        const event = new Event(eventData);
        await Promise.all(
            event.customers.map(async (e) => {
                const customer = await CustomerService.getCustomerById(e);
                customer.events.push(event);
                return customer.save();
            })
        );
        await Promise.all(
            event.animals.map(async (e) => {
                const animal = await AnimalService.getAnimalById(e);
                animal.events.push(event);
                return animal.save();
            })
        );
        return event.save();
    } catch (error) {
        throw new Error("Fail when try to create Event");
    }
};

export const replaceEvent = (filter, eventData) => {
    try {
        return Event.findOneAndReplace(filter, eventData, { new: true });
    } catch (error) {
        throw new Error("Fail when try to replace Event with Id " + id);
    }
};

export const updateEvent = (id, eventData) => {
    try {
        return Event.findByIdAndUpdate(id, eventData, { new: true });
    } catch (error) {
        throw new Error("Fail when try to update Event with Id " + id);
    }
};

export const findEventsByGeocoding = (filter, page, limit) => {
    try {
        return Event.geoSearch(filter)
            .sort("-creationDate")
            .skip(page * limit)
            .limit(limit);
    } catch (e) {
        console.log(e);
        throw new Error("Error while Paginating Events");
    }
};
