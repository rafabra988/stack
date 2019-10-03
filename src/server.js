const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://noix:qwert@test-sthut.mongodb.net/nomedabasededados?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})


app.use(express.json());
app.use(routes);

app.listen(8150);