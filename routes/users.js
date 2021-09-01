import express from "express";
import { addUser, deleteUser, editUser, getUserByID, getUsers } from "../controllers/users.js";

const router = express.Router();

// Get the json object of all users
router.get('/', getUsers);

// Add a new user to the users object database
router.post('/', addUser);

// Search for the user using unique id
router.get('/:id', getUserByID);

// Delete the user using it's id
router.delete('/:id',deleteUser);

// Change the user details (Partially)
router.patch('/:id', editUser);

export default router;