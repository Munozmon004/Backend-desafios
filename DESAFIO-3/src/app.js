import express from 'express'
const app = express()


app.get("/saludo", (req, res) =>  {
  res.send("Hola a todos, pero ahora desde Express!");
});

app.get("/bienvenida", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenido/a</h1>");
})

app.use(express.urlencoded({extended:true}))

app.get("/productos", (req, res) =>{
    console.log(req.query);
})

const productos = [
  {
    id: "1",
   title: "producto-1",
   description: "zapatillas blancas",
   price: "$20 dolares",
   thumbnail: "image1.jpg",
   code: "1010",
   stock: "12"
  },
  {
    id: "2",
    title: "producto-2",
    description: "tenis deportivos",
    price: "$15 dolares",
    thumbnail: "image2.jpg",
    code: "1011",
    stock: "12"
   },
   {
    id: "3",
    title: "producto-3",
    description: "sneakers para mujer",
    price: "$30 dolares",
    thumbnail: "image3.jpg",
    code: "1012",
    stock: "12"
   },
   {
    id: "4",
    title: "producto-4",
    description: "zapatillos de bebe",
    price: "$10 dolares",
    thumbnail: "image4.jpg",
    code: "1013",
    stock: "12"
   },
   {
    id: "5",
    title: "producto-5",
    description: "zapatos de hombre",
    price: "$40 dolares",
    thumbnail: "image5.jpg",
    code: "1014",
    stock: "12"
   },
   {
    id: "6",
    title: "producto-6",
    description: "tacones de mujer",
    price: "$25 dolares",
    thumbnail: "image6.jpg",
    code: "1015",
    stock: "12"
   },
   {
    id: "7",
    title: "producto-7",
    description: "chancla de playa",
    price: "$10 dolares",
    thumbnail: "image7.jpg",
    code: "1016",
    stock: "12"
   },
   {
    id: "8",
    title: "producto-8",
    description: "zapatos de tendencia",
    price: "$30 dolares",
    thumbnail: "image8.jpg",
    code: "1017",
    stock: "12"
   },
   {
    id: "9",
    title: "producto-9",
    description: "zapato economico",
    price: "$10 dolares",
    thumbnail: "image9.jpg",
    code: "1018",
    stock: "12"
   },
   {
    id: "10",
    title: "producto-10",
    description: "tenis de ninos",
    price: "$20 dolares",
    thumbnail: "image10.jpg",
    code: "1019",
    stock: "12"
   },
]

//// localhost:8080/products sin query 10 items (productos)
app.get("/productos", (req, res) => {
  res.json(productos)
});

/// localhost:8080/products/2 id, find id /// also product no find 
app.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  const producto = productos.find(producto => producto.id == id);
  if(producto) res.json(producto);
  else res.send("Producto no encontrado");
}); 




app.listen(8080, () => {
  console.log("Server is running on port 3000");
});