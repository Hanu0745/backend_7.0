
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './routers/studentsRouters.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bhanumanthu450_db_user:hanu123@cluster0.ypr52oi.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(2885, () => {
    console.log("server running at port 2885")
});
