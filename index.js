import express from "express";
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`server start on http//localhost:${port}`);
});