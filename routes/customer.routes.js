import express from "express";
import Customer from "../models/customer.model.js";
import * as CustomerController from "../controller/customer.controller.js";

const router = express.Router();

export default router;

router.get("/customer", CustomerController.getAll);
router.get("/customer/:id", CustomerController.getById);
router.post("/customer", CustomerController.create);
router.delete("/customer/:id", CustomerController.deleteById);

/*
router.get("/customer", async (req, res) => {
    const customer = await Customer.find();
    res.send(customer);
}); 


router.get("/customer/:id", async (req, res) => {
    const customer = await Customer.findById({_id: req.params.id});
    res.send(customer);
});
*/

/*
router.post("/customer", async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        adress: req.body.adress,
        phone: req.body.phone,
        peoples: req.body.peoples,
        events: req.body.events,
    });

    await customer.save();

    res.send(customer);
});

/*
router.put("/customer/:id", async (req, res) => {
    const customer = await Customer.findOneAndUpdate(req.body, update);
    res.send(customer);
});
*/
/*
router.delete("/customer/:id", async (req, res) => {
    const customer = await Customer.deleteOne({_id: req.params.id});
    res.send(customer);
});
*/