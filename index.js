
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './routers/studentsRouters.js';
import userRouter from './routers/userRouter.js';
import mailsenderRouter from './routers/mailsenderRouter.js';
import authRouter from './routers/authRouter.js';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import coockieParser from 'cookie-parser';

const app = express();
app.use(express.json());
// cors configuration
app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // to allow cookies
}));
app.use(coockieParser());
// static folder for uploads to be accessible 
app.use('/uploads', express.static(path.join('./uploads')));

// database connection
mongoose.connect(process.env.DB_URL).then(() => console.log("db connected"))
    .catch((error) => console.log(error));

// student routes
app.use('/', studentRouter);

// user routes
app.use('/user', userRouter);

// mail sender routes
app.use('/mail', mailsenderRouter);

// authentication router
app.use('/auth', authRouter);

// default route
app.get('/', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

// start server
app.listen(7007, () => {
    console.log("server running at port 7007");
});
