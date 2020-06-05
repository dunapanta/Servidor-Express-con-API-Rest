import express from 'express';
import bodyParser from 'body-parser';
import shopRoutes from './routes/shop';
import mongooseDriver from 'mongoose';

const app = express();

//application/json
app.use(bodyParser.json()); 

//Middleware para CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type: application/json');
    next();
});

//application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded()); 

app.use('/admin', shopRoutes);

mongooseDriver.connect("mongodb+srv://daniel:WGLZHM48j4kvXcz5@clasemongo-1u8oi.mongodb.net/ecomerce_db?retryWrites=true&w=majority")
.then(() => {
    console.log("Coneccion con la BD Establecida");
    app.listen(8080, () => { console.log("Escuchando sobre el puerto 8080"); });
}).catch(err => {
    console.log("Error", err)
})


