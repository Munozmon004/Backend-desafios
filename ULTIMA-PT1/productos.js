const fs = require("fs");

class ProductManager {

    static #id = 0;
    #products;
    #path

    constructor(path) {
        this.#products = [];
        this.#path = path;
    }

    addProduct(title, description, price, img, code, stock) {
        let mensaje;

        const existeCodigo = this.#products.some(p => p.code === code);

        if (existeCodigo) 
            mensaje = `El codigo del producto ${code} ya existe`;
        else {
            const newProduct = {
                id: ++ProductManager.#id,
                title,
                description,
                price,
                img,
                code,
                stock,
            };

            if (!Object.values(newProduct).includes(undefined)) {
                this.#products.push(newProduct);
                fs.writeFileSync(this.#path,JSON.stringify(this.#products));
                mensaje = "Producto agregado correctamente";
            } else {
                mensaje = "Se requiere completar todos los campos"
            }
        }

        return mensaje;
    }

    getProduct() {
        return this.#products;
    }

    getProductById(id) {
        const productoId = this.#products.find(p => p.id === id);

        return productoId ? productoId : `El producto con ID ${id} no existe`;
    }

    updateProduct (id, propiedades) {
        
        let mensaje;
        const indice = this.#products.findIndex(p => p.id === id);

        if(indice != -1){
            const { id, ...rest } = propiedades;
            this.#products[indice] = { ...this.#products[indice], ...rest }
            mensaje = `El producto fue actaulizado correctamente`
            
        } else
          mensaje = `El producto con ID ${id} no existe`;
        return mensaje;
    }

    deleteProduct (id) {
        let mensaje;
        const indice = this.#products.findIndex(p => p.id === id);

        if ( indice >= 0) {
            this.#products.splice(indice, 1);
            mensaje = "Producto eliminado"
        } else {
            mensaje =`El producto con ID ${id} no existe`;
            
        }
        return mensaje;
    }

}

const productos = new ProductManager();

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

module.exports = {
    ProductManager
}