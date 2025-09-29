
db = db.getSiblingDB("udav_bd2");

db.clientesVIP && db.clientesVIP.drop();
db.createView("clientesVIP", "clientes", [
  { $addFields: { promedioCompras: { $avg: "$compras" } } },
  { $match: { promedioCompras: { $gt: 500 } } },
  { $project: { _id: 0, nombre: 1, edad: 1, pais: 1, promedioCompras: 1 } }
]);

print("Vista 'clientesVIP' creada");