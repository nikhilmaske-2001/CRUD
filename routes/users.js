import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "Nikhil",
        lastName: "Maske",
        age: 20
    },
    {
        firstName: "Vedanti",
        lastName: "Maske",
        age: 15
    }
]

router.get('/', (req, res) => {
    console.log(users);
    
    res.send(users);
});

export default router;