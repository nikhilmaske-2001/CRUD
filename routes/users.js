import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

// Get the json object of all users
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

// Add a new user to the users object database
router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`User with the new name ${user.firstName} added to the database`);

});

// Search for the user using unique id
router.get('/:id', (req, res) => {
   const {id} = req.params;
   
   const foundUser = users.find((user) => user.id === id);

   res.send(foundUser);
});

// Delete the user using it's id
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} is deleted`);
});

// Change the user details (Partially)
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName) {
        user.firstName = firstName;
    }

    if(lastName) {
        user.lastName = lastname;
    }

    if(age) {
        user.age = age;
    }

    res.send(users);
});

export default router;