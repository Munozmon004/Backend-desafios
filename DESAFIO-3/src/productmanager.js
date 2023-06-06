const fs = require("fs");

class ProductManager{
    constructor(path){
        this.products = [];
        this.path = path;
    }

    addProducts(title, description, price, thumbnait, code, stock) {
        if (
         !title ||
         !price ||
         !description ||
         !thumbnait ||
         !code ||
         !stock ||
         this.products.find((p) => p.code === code)
        ) {
          // lanzar un error
          throw new Error("Error: Campos de producto faltantes o código duplicado.");
        } else {
          this.products.push({
          id: this.products.length + 1,
          title,
          description,
          price,
          thumbnait,
          code,
          stock,
        });
    }
  }

  getProduct() {
    return this.products;
  }

  existe(id) {
    return this.products.find((productos) => productos.id === id);
  }

  getProductById(id) {
    const product = this.existe(id);
    if (product) {
      console.log(product);
    } else {
      console.log("Not Found");
    }
  }

  updateProduct(id, updatedFields) {
    const productToUpdate = this.products.find((product) => product.id === id);

    if (productToUpdate) {
      Object.assign(productToUpdate, updatedFields);
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

const productos = new ProductManager("path/to/file.json");
console.log(productos.getProduct());

productos.addProduct("title1", "description1", 1000, "thumbnait1", "abc123", 5);
productos.addProduct("title2", "description2", 1000, "thumbnait2", "abc124", 6);
console.log(productos.getProduct());

productos.getProductById(3);