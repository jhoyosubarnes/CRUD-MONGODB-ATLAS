const express = require ('express');
const mongoose = require ('mongoose');
require('dotenv').config();
const rutasUsuario = require('./routes/user.js');

const app = express();
const port = process.env.PORT || 9000;


// middleware
app.use(express.json());
app.use('/api', rutasUsuario);

// routes
app.get("/", (req, res) => {
	res.send("Respuesta");
});


mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to Mongo Atlas"))
	.catch((error) => console.error(error));

// puerto de escucha
app.listen(port, () => console.log('Puerto de Escucha del servidor', port));
































/*
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Eugenio', color: 'rojo' },
  { name: 'Nia', color: 'rojo' },
  { name: 'Estambul', color: 'rojo'},
  { name: 'Estrellita', color: 'rojo' },
  { name: 'Nero', color: 'rojo'}
];


function contarOvejas(a,b) {
	// ovejas.map(e => console.log(e));
  console.log(`Nombre: $(b + 1) $(a.name) Color: $(a.color)`);
  // return ovejas
}
ovejas.forEach((nom,b) => contarOvejas(nom, b));
contarOvejas();
// console.log(ovejas) 

*/