import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(users);

    res.send(users);
};

export const addUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`User with the new name ${user.firstName} added to the database`);

};

export const getUserByID = (req, res) => {
    const {id} = req.params;
    
    const foundUser = users.find((user) => user.id === id);
 
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} is deleted`);
};

export const editUser = (req, res) => {
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
};