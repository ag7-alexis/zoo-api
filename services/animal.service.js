import Animal from "../models/animal.model.js";
import * as EventService from "./event.service.js";

export const getAnimals = (filter, page, limit) => {
    try {
        return Animal.find(filter)
            .sort("-creationDate")
            .skip(page * limit)
            .limit(limit);
    } catch (e) {
        throw new Error("Error while Paginating Animals");
    }
};

export const getCountAnimals = (filter) => {
    try {
        return Animal.count(filter);
    } catch (e) {
        throw new Error("Error while find count of Animals");
    }
};

export const getAnimalById = (id) => {
    try {
        return Animal.findById(id);
    } catch (error) {
        throw new Error("Fail when try to find Animal with Id " + id);
    }
};

export const deleteAnimal = (filter) => {
    try {
        return Animal.deleteOne(filter);
    } catch (error) {
        throw new Error("Fail when try to delete Animal with Id " + id);
    }
};

export const createAnimal = async (animalData) => {
    try {
        const animal = new Animal(animalData);
        await Promise.all(
            animal.events.map(async (e) => {
                const event = await EventService.getEventById(e);
                event.animals.push(animal);
                return event.save();
            })
        );
        return animal.save();
    } catch (error) {
        throw new Error("Fail when try to create Animal");
    }
};

export const replaceAnimal = (filter, animalData) => {
    try {
        return Animal.findOneAndReplace(filter, animalData, { new: true });
    } catch (error) {
        throw new Error("Fail when try to replace Animal with Id " + id);
    }
};

export const updateAnimal = (id, animalData) => {
    try {
        return Animal.findByIdAndUpdate(id, animalData, { new: true });
    } catch (error) {
        throw new Error("Fail when try to update Animal with Id " + id);
    }
};
