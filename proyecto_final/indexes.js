// proyecto_final/indexes.js
db = db.getSiblingDB("udav_bd2");

// Índices recomendados
db.pedidos.createIndex({ fecha: -1 });
db.pedidos.createIndex({ estado: 1, fecha: -1 });
db.pedidos.createIndex({ clienteId: 1, fecha: -1 });

printjson(db.pedidos.getIndexes());
