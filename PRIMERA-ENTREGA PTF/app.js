import express  from 'express';
import products from './routes/products.js'
import carts from './routes/carts.js'

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/products',products);
app.use('/api/carts',carts);

app.get('/', function(req, res) {
    return res.send("Primera Entrega Proyecto Backend")
});


app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`);
});