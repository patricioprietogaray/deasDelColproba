// Archivo: /server/module/getIP/getIP.js
// Contiene una función para obtener la IP local del servidor

const os = require("os"); // Importa el módulo 'os' para interactuar con las interfaces de red del sistema

const getLocalIp = (preferIPv6) => {
    try {
        const networkInterfaces = os.networkInterfaces(); // Obtiene todas las interfaces de red

        for (const key in networkInterfaces) {
            for (const iface of networkInterfaces[key]) {
                if ((preferIPv6 && iface.family === "IPv6") ||(!preferIPv6 && iface.family === "IPv4")) {
                    if (!iface.internal) {
                        return iface.address; // Devuelve la dirección IPv4 encontrada
                    }
                    
                }
            }
        }

        return "La IP no está disponible"; // Si no se encuentra una IP válida
    } catch (error) {
        console.error("Error al obtener la IP local:", error);
        return "Error al obtener la IP";
    }
};

module.exports = getLocalIp;
