"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getHealthyAdvices = (_req, res) => {
    const data = [
        {
            id: 1,
            name: 'Anna',
            rating: 4.9,
        },
    ];
    res.json(data);
};
exports.default = { getHealthyAdvices };
