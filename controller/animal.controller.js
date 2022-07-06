import * as AnimalService from "../services/animal.service.js";

export const getAll = async (req, res) => {
    const page = Math.max(parseInt(req.query.page) || 0, 0);
    const limit = Math.max(parseInt(req.query.limit) || 10, 1);

    try {
        const animals = await AnimalService.getAnimals({}, page, limit);
        return res.send(animals);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const animal = await AnimalService.getAnimalById(id);
        if (animal === null) {
            return res.status(404).send({ message: "Can't found animal with Id " + id });
        }
        return res.send(animal);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const { deletedCount } = await AnimalService.deleteAnimal({ _id: id });
        if (deletedCount === 0) {
            return res.status(404).send({ message: "Can't found animal to delete with Id " + id });
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const create = async (req, res) => {
    const { name, age, race, sexe, events } = req.body;
    try {
        const animal = await AnimalService.createAnimal({
            name,
            age,
            race,
            sexe,
            events,
        });
        return res.status(201).send(animal);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const replace = async (req, res) => {
    const { id } = req.params;
    const { name, age, race, sexe, events } = req.body;
    try {
        const animal = await AnimalService.replaceAnimal(
            { _id: id },
            {
                name,
                age,
                race,
                sexe,
                events,
            }
        );
        if (animal === null) {
            return res.status(404).send({ message: "Can't found animal with Id " + id });
        }
        return res.send(animal);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};

export const update = async (req, res) => {
    const { id } = req.params;
    const { name, age, race, sexe, events } = req.body;

    try {
        const animal = await AnimalService.updateAnimal(id, {
            ...(name !== undefined && { name }),
            ...(age !== undefined && { age }),
            ...(race !== undefined && { race }),
            ...(sexe !== undefined && { sexe }),
            ...(events !== undefined && { events }),
        });

        if (animal === null) {
            return res.status(404).send({ message: "Can't found animal with Id " + id });
        }
        return res.send(animal);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
};
