const express = require ('express');
const app = express();
const path = require('path');
const routes = require('./routes/proyectoRoutes');
const databaseConnection = require('../config/database');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use("",routes);
databaseConnection.connect();
app.listen(3000,()=>{
    console.log('Corriendo en Puerto 3000');
});
