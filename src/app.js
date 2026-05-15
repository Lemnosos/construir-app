const express = require('express');

const app = express();
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", require("./routes/publicRoutes"));

//indicamos a view engine q va a usar archivos tipo EJS
app.set('view engine', 'ejs')

//asignamos a las vistas, la ruta donde van a estar almacenadas las vistas
app.set("views", __dirname + "/views");


app.listen(port, () => {
    console.log('a la escucha del ', port)
})