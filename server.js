const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    return res.json(
        [
            {name: 'Diego', age: 22, office: 'Dev web Front End'},
            {name: 'Mayk', age: 35, office: 'Dev Web Full Stack'},
            {name: 'William', age: 19, office: 'College Student'},
            {name: 'Marcos', age: 19, office: 'DevOps'}
        ]
    );
});

app.listen('4567');