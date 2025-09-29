// proyecto_final/pedidos_seed.js
db = db.getSiblingDB("udav_bd2");
db.pedidos.drop();

const hoy = new Date();
function daysAgo(n){ return new Date(hoy.getTime() - n*24*60*60*1000); }

db.pedidos.insertMany([
  { pedidoId: 101, clienteId: "C001", estado: "pendiente",  fecha: daysAgo(2),  total: 850.50, items: [{sku:"A1", qty:2},{sku:"B9", qty:1}] },
  { pedidoId: 102, clienteId: "C002", estado: "enviado",    fecha: daysAgo(5),  total: 120.00, items: [{sku:"X3", qty:1}] },
  { pedidoId: 103, clienteId: "C003", estado: "entregado",  fecha: daysAgo(12), total: 450.00, items: [{sku:"A1", qty:1},{sku:"C7", qty:3}] },
  { pedidoId: 104, clienteId: "C001", estado: "cancelado",  fecha: daysAgo(20), total: 50.00,  items: [{sku:"Z0", qty:5}] },
  { pedidoId: 105, clienteId: "C004", estado: "enviado",    fecha: daysAgo(31), total: 999.99, items: [{sku:"K2", qty:2}] }, // fuera de ventana
  { pedidoId: 106, clienteId: "C002", estado: "pendiente",  fecha: daysAgo(0),  total: 75.75,  items: [{sku:"M5", qty:1}] }
]);

print("Semilla de 'pedidos' lista:", db.pedidos.countDocuments());
