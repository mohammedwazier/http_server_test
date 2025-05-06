const express = require('express');
const cors = require('cors');

const app = express();
const port = 5388;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/GetForward/:id', (req, res) => {
    res.send('OK').status(200);
});

app.post('/SubmitReturn/:id', (req, res) => {
    const requestId = req.params.id;
    console.log(`Received request with ID: ${requestId}`);
    // const body = req.body;
    // console.log(req.body);
    console.log(`Received body: ${JSON.stringify(req.body)}`);
    res.send('true').status(200);
});

app.use((req, res) => {
    res.status(200).send('true');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});