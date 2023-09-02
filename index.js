const express = require('express');
const app = express();
const mainRouting = require('./routes');

app.get('/', 
    (req, res) => {
        res.status(200).json({
            message: 'Server is running correctly'
        });
    }
);

app.use(express.json());
mainRouting(app);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});