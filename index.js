const express = require('express');
const PORT = process.env.PORT || 5050;

const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to Simply Express!');
})

app.get('/hello', (req, res)=>{
    res.send('Hello, World!');
})

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
})