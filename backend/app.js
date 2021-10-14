var express = require("express");
var app = express();
var cors=require('cors');
const mongoose = require('mongoose');
const productsRoutes = require("./router/products");
const categoriesRoutes = require("./router/category");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//link de prueba completo (para productos) seria: http://localhost:3002/api/products
app.use("/api/products", productsRoutes);

app.use("/api/categories", categoriesRoutes);
//conexion a mongoose:
//Sigrun password to database:oxyzgJ5ELGuVvBR7
mongoose.connect('mongodb+srv://Sigrun:oxyzgJ5ELGuVvBR7@cluster0.kls93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('estamos conectados'))


module.exports = app;