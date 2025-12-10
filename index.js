
import express from 'express';
import studentsRouter from './routes/studentsRoutes.js';
const app = express();
app.use(express.json());

app.use('/', studentsRouter);

app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(7007, () => {
    console.log("server running at port 7007")
});
