
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './routers/studentsRouters.js';
import userRouter from './routers/userRouter.js';
import mailsenderRouter from './routers/mailsenderRouter.js';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join('./uploads')));

// database connection
mongoose.connect("mongodb+srv://bhanumanthu450_db_user:hanu123@cluster0.ypr52oi.mongodb.net/").then(() => console.log("db connected"))
    .catch((error) => console.log(error));

// student routes
app.use('/', studentRouter);

// user routes
app.use('/user', userRouter);

// mail sender routes
app.use('/mail', mailsenderRouter);

// default route
app.get('/', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

// start server
app.listen(7007, () => {
    console.log("server running at port 7007");
});
