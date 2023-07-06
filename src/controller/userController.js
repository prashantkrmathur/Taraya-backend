const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

router.post("/api/adduser", async (req, res) => {
    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        res.status(200).send({ newUser });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch("/api/user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        res.status(200).send({ user });
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/user", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        res.status(200).send([user])
        
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/api/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        res.status(200).send([user])

    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;