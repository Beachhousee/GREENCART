import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import connectDB from './configs/db.js';
import userRouter from './routes/userRoute.js'; 
import 'dotenv/config'
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/Cloudinary.js';

const app = express();

const port = process.env.PORT || 4000; 
await connectDB()
await connectCloudinary()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }))

app.get('/', (req, res) => res.send("api is working"));
app.use('/api/user', userRouter)
app.use('/api/seller',sellerRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});