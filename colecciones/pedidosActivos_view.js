
db = db.getSiblingDB("udav_bd2");

db.pedidosActivos && db.pedidosActivos.drop();
db.createView("pedidosActivos", "pedidos", [
  { $match: { estado: { $in: ["pendiente","enviado"] } } }
]);

print("Vista 'pedidosActivos' creada");
