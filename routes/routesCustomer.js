const express = require('express');
const Customer = require('./models/Customer');

const router = express.Router();

module.exports = router;

router.get('/customer', async (req, res) => {
    const customer = await Customer.find();
    res.send(customer);
})

router.post('/customer', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        adress: req.body.adress,
        phone: req.body.phone,
        peoples: { 
            Age: req.body.peoples.Age,
            Sexe: req.body.peoples.Sexe
        }
    })

    await dog.save();

    res.send(dog);
})
