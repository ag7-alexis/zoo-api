import * as AnimalService from "../services/animal.service.js";

export const getAll = async (req, res) => {
    const events = await AnimalService.getAnimals({});
    res.send(events);
};

export const create = async (req, res) => {
    const { name, age, race, sexe, events } = req.body;
    const animal = await AnimalService.createAnimal({
        name,
        age,
        race,
        sexe,
        events,
    });
    res.send(animal);
};

export const getById = async (req, res) => {
    const { id } = req.params;
    const animal = await AnimalService.getAnimalById(id);
    res.send(animal);
};

export const deleteById = async (req, res) => {
    const { id } = req.params;
    await AnimalService.deleteAnimal({ _id: id });
    res.send();
};



