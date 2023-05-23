/* Desafio uno */
class ProductManager{
    constructor(){
        this.product = [];
        this.nextId =1;
    }

    addProduct(title,description,price,thumbnail,code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("todos los campos son obligatorios");
            return;
        }

        const existingProduct = this.product.find(this.product => this.product.code === code);
        if(existingProduct) {
            console.log("item already exists");
            return;
        }

        const product = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.product.push(product);
    }

    getProducts(){
        return this.product;
    }
    getProductsById(id) {
        const product = this.product.find(this.product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not found");
            return null;
        }
    }
}
const manager = new ProductManager();
