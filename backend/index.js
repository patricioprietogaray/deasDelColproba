// Archivo: /index.js
// Punto de entrada principal para iniciar el servidor

require('dotenv').config({ path: './config/.env' });

const server = require("./server/server");

// Inicia el servidor
server();