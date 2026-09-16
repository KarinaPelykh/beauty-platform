"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signup = (req, res) => {
    const { name, email, password } = req.body;
    res.status(201).json({ name, email, password });
};
const signin = (req, res) => {
    console.log(req.body);
    res.send('I got info');
};
exports.default = { signup, signin };
