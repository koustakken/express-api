import express from "express";

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('hello express');
});

app.listen(port, () => {
    console.log(`server start on http//localhost:${port}`);
});