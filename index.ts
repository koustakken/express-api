import express, { Request, Response, NextFunction } from "express";
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(401).send(err.message);
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`server start on http//localhost:${port}`);
});