const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");

router.post("/createuser",
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const salt = await bcrypt.genSalt(10);
            const securePassword = await bcrypt.hash(req.body.password, salt);

            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location,
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

router.post("/loginuser",
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {
        const email = req.body.email;
        try {
            const userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try logging in with correct credentials" });
            }

            const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
            if (!passwordMatch) {
                return res.status(400).json({ errors: "Try logging in with correct credentials" });
            }

            return res.json({ success: true });

        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

module.exports = router;
