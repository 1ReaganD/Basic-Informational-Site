const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactMe.html'))
})

app.listen(PORT, () => {
    console.log('Server is running')
});