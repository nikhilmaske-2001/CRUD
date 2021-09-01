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

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`User with the new name ${user.firstName} added to the database`);

});

export default router;