// Archivo: /server/server.js
// Configura y ejecuta el servidor Express

const express = require("express");
const getLocalIp = require("./module/getIP/getIP");


const server = () => {
    console.log("Iniciando el servidor...");

    const app = express(); // Crea la instancia de Express
    const ipLocalIPv4 = getLocalIp();
    const ipLocalIPv6 = getLocalIp(true);

    console.log('IPv4:', ipLocalIPv4); // Default: IPv4
    console.log('IPv6:', ipLocalIPv6); // Para obtener IPv6

    //const PORT = process.env.PORTBACKEND || 3001; // Usa el puerto definido en el .env o 3001 por defecto
    const PORT = process.env.PORTBACKEND;

    // Ruta básica
    app.get("/", (req, res) => {
        res.send(`Servidor corriendo en:  
            - IPv4: http://${ipLocalIPv4}:${PORT}
            - IPv6: http://[${ipLocalIPv6}]:${PORT}`);
    });

    // Inicia el servidor
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en:
            - IPv4: http://${ipLocalIPv4}:${PORT}
            - IPv6: http://[${ipLocalIPv6}]:${PORT}`);
    });

    return app; // Devuelve la instancia de Express, si es necesario
};

module.exports = server;
