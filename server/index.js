const express = require("express");
const cors = require(`cors`);
const app = express();
app.use(cors());
app.use(express.json());

app.get(`/api/users`, (req, res) => {
    let friends = [`Nitin`, `Eric`, `Jeddy`, `Cameron`, `Riley`];
    res.status(200).send(friends);
});

app.get(`/api/weather/:temperature`, (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature}</h3>`;
    res.status(200).send(phrase)
});

const PORT_NUMBER = 4000;
app.listen(PORT_NUMBER, () => console.log(`Server Active On Port ${PORT_NUMBER}`));