
db = db.getSiblingDB("udav_bd2");


db.clientesVIP && db.clientesVIP.drop();
db.createView("clientesVIP", "clientes", [
  { $addFields: { promedioCompras: { $avg: "$compras" } } },
  { $match: { promedioCompras: { $gt: 500 } } },
  { $project: { _id: 0, nombre: 1, edad: 1, pais: 1, promedioCompras: 1 } }
]);
print("Vista 'clientesVIP' creada");


db.clientesVIP_mat.drop();
db.clientesVIP_mat.createIndex({ nombre: 1, edad: 1, pais: 1 }, { unique: true });

db.clientes.aggregate([
  { $addFields: { promedioCompras: { $avg: "$compras" } } },
  { $match: { promedioCompras: { $gt: 500 } } },
  { $project: { _id: 0, nombre: 1, edad: 1, pais: 1, promedioCompras: 1 } },
  { $merge: { into: "clientesVIP_mat", on: ["nombre","edad","pais"], whenMatched: "replace", whenNotMatched: "insert" } }
]);
print("Colección materializada 'clientesVIP_mat' (refrescada)");


db.pedidos.drop();
db.pedidos.insertMany([
  { pedidoId: 1, cliente: "Ana",    estado: "pendiente", fecha: new Date() },
  { pedidoId: 2, cliente: "Luis",   estado: "enviado",   fecha: new Date() },
  { pedidoId: 3, cliente: "María",  estado: "entregado", fecha: new Date() },
  { pedidoId: 4, cliente: "Carlos", estado: "pendiente", fecha: new Date() }
]);


db.pedidosActivos && db.pedidosActivos.drop();
db.createView("pedidosActivos", "pedidos", [
  { $match: { estado: { $in: ["pendiente","enviado"] } } }
]);
print("Vista 'pedidosActivos' creada");
