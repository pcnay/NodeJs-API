require("dotenv").config() // Para que use las variables de entorno 
const express = require("express")
const cors = require("cors") // Para evitar los errores cruzados de los navegadores
const app = express()

app.use(cors())
const port = process.env.PORT || 4200 // Puertos abiertos en el servidor, el otro es 3033

app.listen(port, () => {
	console.log(`Servidor HTTP esta ejecutandose puerto : ${port} `)
})
