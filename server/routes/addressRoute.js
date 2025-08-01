import express from 'express';
import authUser from '../middlewares/authuser.js';
import { addAddress, getAddress } from '../controllers/addressController.js';

const addressRouter = express.Router();

addressRouter.post('/add', authUser, addAddress);
addressRouter.post('/get', authUser, getAddress);

export default addressRouter;