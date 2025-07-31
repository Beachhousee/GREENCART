import mongoose from "mongoose";
import authUser from "../middlewears/authUser.js";
import { updateCart } from "../controllers/cartController.js";

const cartRouter = mongoose.Router();

cartRouter.post('/update', authUser, updateCart);

export default cartRouter;