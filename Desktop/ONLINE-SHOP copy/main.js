// LOOK AT ME  JS //
const productContainers = [...document.querySelectorAll('.item-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

class Producto {
    constructor(id, name, price,){
        this.id = id;
        this.name = name; 
        this.price = price; 
        this.quantity = 1;
    }
}

const Electronic = new Producto(1001, "Charger Iphone 1m", 2.5);
const Home = new Producto(2001, "Plastic Bottle 500ml", 5.00);
const Phone = new Producto(3001, "Samsung Case Phone solid color", 5.00);
const Trend = new Producto(4001, "SmartWatch clock", 10.00);
const Charger = new Producto(5001, "Cable charger iphone 1m", 5.00);
const Hair = new Producto(6001, "Scrucnhie color 1 piece", 3.00);
const Clothes = new Producto(7001, "Long Sweeter Graphic", 20.00);
const Kids = new Producto(8001, "Bear Light night", 10);

//Crear un array con todo nuestro catálogo de productos: 

const productos = [Electronic,Home,Phone,Trend,Charger,Hair,Clothes,Kids];

console.log(productos);


let cart = [];

if(localStorage.getItem("cart")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");


//Creamos una función para mostrar los productos. 

const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

//Creamos la función agregar al carrito: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    calcularTotal();
    //Trabajamos con el localStorage: 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Mostrar el carrito de compras:

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        contenedorCarrito.appendChild(card);

        //Eliminamos productos desde el carrito: 
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}

//Funcion que elimina el producto del carrito:

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //Trabajamos con el localStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


//Mostramos el total de la compra: 

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        //+= es igual a poner totalComra = totalCompra + producto.precio * producto.cantidad 
    })
    total.innerHTML = `Total: $${totalCompra}`;
}

//Vaciar todo el carrito: 

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = []; 
    mostrarCarrito();

    //LocalStorage:
    localStorage.clear();
}


    

