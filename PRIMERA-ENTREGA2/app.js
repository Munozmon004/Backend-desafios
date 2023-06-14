import express from 'express';
import products from './routesproductos.json'
import carts from './routescarts.json'

const app = express();
const port = 8080;

app.use(express.json())

app.use('/api/products', products);
app.use('/api/carts', carts);

app.get('/', function (req, res) {
    return res.send('Primera Entrega Backend')
});



app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});