const { ProductManager }  = require('./productos.js');

const productos = new ProductManager('./data/productos.json');

const p1 = productos.addProduct("Ropa", "Para ninos", 10, "img1", "abc1", 9);
const p2 = productos.addProduct("Vestidos", "Para ninos", 20, "img1", "abc12", 8);
const p3 = productos.addProduct("Zapatos", "Para ninos", 15, "img1", "abc123", 7);
const p4 = productos.addProduct("Accesorios", "Para ninos", 10, "img1", "abc1234", 6);
const p5 = productos.addProduct("Tenis", "Para ninos", 30, "img1", "abc12345", 5);
const p6 = productos.addProduct("Cintos", "Para ninos", 10, "img1", "abc123456", 4);
const p7 = productos.addProduct("Camisas", "Para ninos", 20, "img1", "abc1234567", 3);
const p8 = productos.addProduct("Trends", "Para ninos", 25, "img1", "abc12345678", 2);
const p9 = productos.addProduct("Calcetines", "Para ninos", 15, "img1", "abc123456789", 1);
//console.log({ p1, p2, p3, p4, p5, p6, p7, p8, p9 });


//console.log (productos.deleteProduct(3));
//console.log (productos.deleteProduct(11));

const updateP1 = {
    id: 4,
    price: 15,
    stock: 1
}
console.log(productos.updateProduct(4, updateP1));
//console.log(productos.getProduct());