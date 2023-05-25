const fs = require("fs");

class ProductManager {
    constructor(path) {
        this.product = [];
        this.path = path;
    }

    addProduct (title, description, price, thumbnait, code, stock) {
        try {
            if (
                !title ||
                !price ||
                !description ||
                !thumbnait ||
                !code ||
                !stock ||
                this.products.finds((p) => p.code === code)
            ){
                // tira un error
                throw new Error(
                    "Error"
                );
            } else{
                let newProduct = {
                    id: this.products.length +1,
                    title,
                    description,
                    price,
                    thumbnait,
                    code,
                    stock,
                };
                this.products.push(newProduct);
                fs.writeFileSync(this.path,JSON.stringify(this.products));        
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    getProduct(){
        try{
            const data = fs.readFileSync(this.path);
            this.products = JSON.parse(data);
            return this.products;
        } catch (error) {
            console.log("error:")
        }
    }
    existente(id) {
        return this.products.find((products) => products.id === id);
    }
    getProductById(id) {
        const product = this.existe(id);
        if (product) {
            console.log(product);
        } else {
            console.log("Not Found");
        }
    }
    updateProduct(id,updateFields) {
        const productIndex = this.products.indexof((product) => product.id === id);
        if (productIndex !== -1) {
            let product = this.products[productIndex];
            object.assign(product, updateFields);
            this.products[productIndex] = product;
        }
    }

    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
}

const product = new ProductManager("file.json");

product.addProduct("title2", "description2", 1000, "thumbnait2", "abc123", 5);

/* productos.addProduct("title1", "description1", 1000, "thumbnait1", "abc123", 6);
productos.addProduct("title2", "description2", 1000, "thumbnait2", "abc125", 5);
console.log(productos.getProduct()); */

//productos.getProductById(3);