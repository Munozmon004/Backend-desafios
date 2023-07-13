import express  from 'express';
import hbs  from 'hbs';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import products from '../routes/products.js';
import carts from '../routes/carts.js';
import views from '../routes/views.router.js';
import __dirname from '../utils/dirname.js';
import Productos from '../models/productos.js';


import { Server } from 'socket.io'

const app = express();
const connection = await mongoose.connect(
    "mongodb+srv://munozmon004:coder@cluster0.dwpogov.mongodb.net/?retryWrites=true&w=majority"
);
const port = 8080;

const p = new Productos();

app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.json());


app.use('/api/products',products);
app.use('/api/carts',carts);
app.use('/', views);


const httpServer = app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`);
});

const io = new Server(httpServer);

io.on('connection', socket => {
    console.log('Nuevo usuario conectado');

    socket.on('disconnect', () => {
        console.log('El usuario se a desconectado');
    })

    socket.emit('productos', p.getProduct());

    socket.on('productos', (idProducto) => {
        p.deleteProduct(parseInt(idProducto));
        socket.emit('productos', p.getProduct());
    });
});