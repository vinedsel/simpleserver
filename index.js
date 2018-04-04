const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log('Simple Server is running on 3000');
});

app.get('/', function (req, res) {
    res.send('You successfully created a GET route!')
})
