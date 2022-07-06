import Animal from "../models/animal.model.js";

export const getAnimals = (filter) => Animal.find(filter);

export const createAnimal = (animalData) => {
    const animal = new Animal(animalData);
    return animal.save();
};

export const getAnimalById = (id) => Animal.findById(id);

export const deleteAnimal = (filter) => Animal.deleteOne(filter);