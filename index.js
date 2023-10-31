require('dotenv').config();
var express = require('express');
var app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('Server running on port ' + PORT);
});

app.get('/', (req, res) => {
    res.send('Terve');
})

app.get('/user', (req, res) => {
    res.send('Terve, User!')
})