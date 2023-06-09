import { readFileSync, writeFileSync, existsSync } from 'node:fs';
//import ProductManager from '../models/productos.js';

//export default class Cart {

    //static #id;
    //#path;
    //#carts;
    //#products;

    //constructor(){
        //this.#path = "./data/carts.json";
        //this.#carts = this.#leerArchivo();
        //Cart.#id = this.#carts.length > 0 ? this.#carts[this.#carts.length-1].id : 0;
        //this.#products = new ProductManager();
    //}

    //#leerArchivo() {
        //try {
            //let data;
            //if (existsSync(this.#path))
                //data = JSON.parse(readFileSync(this.#path, 'utf-8'));
            //else 
               // data = [];

            //return data;
        //} catch (error) {
           // console.log(error);
        //}
    //}

    //createCart() {
       // try {
          //  const newCart = {
              //  id : ++Cart.#id,
                //products:[],
           // };

            //this.#carts.push(newCart);
            //writeFileSync(this.#path, JSON.stringify(this.#carts));
            //return 'Carrito fue creado correctamente';
        //} catch (error) {
           // console.log(error);
        //}
    //}

    //getCarts() {
      //  return this.#carts;
    //}

    //getCartById(id) {
      //  const carritoId = this.#carts.find(c => c.id === id);

        //return carritoId ? carritoId : `El carrito con ID ${id} no existe`;
    //}

    //addProductCart(idCart, idProduct) {
      //  try {
        //    let mensaje;

          //  const indiceCarrito = this.#carts.findIndex(c => c.id === idCart);
            //const existeProducto = this.#products.getProductById(idProduct);

            //if(indiceCarrito != -1 && existeProducto) {

              //  const indiceProducts = this.#carts[indiceCarrito].products.findIndex(p => p.id === idProduct);

                //if(indiceProducts != -1) {
                  //  this.#carts[indiceCarrito].products[indiceProducts].quantity = this.#carts[indiceCarrito].products[indiceProducts].quantity +1;
               // } else{
                 //   const producto = {
                   //     id: idProduct,
                     //   quantity: 1
                    //}
    
                   // this.#carts[indiceCarrito].products.push(producto);

                //}
                //writeFileSync(this.#path, JSON.stringify(this.#carts));

                //mensaje = "El producto se agrego correctamente al carrito";

           // } else{
             //   mensaje = "El id del carrito o el id del producto no existe";
           // }

            //return mensaje
        //} catch (error) {
          //  console.log(error);
        //}
    //}
//}

import moongose from "moongose";

const companyCollection = "ecommerce";

const ecommerceSchema = new moongose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    email: {
      type: String,
      unique: true,
    },
}); 

const ecommerceManager = moongose.model(companyCollection, ecommerceSchema); 
export default ecommerceManager;