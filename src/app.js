const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://userApp:esquecidb@aulawebdb01.hoth9ot.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'AulaWebDB01'
});

app.use('/api', foodRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

