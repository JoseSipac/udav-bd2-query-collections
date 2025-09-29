
db = db.getSiblingDB("udav_bd2");


db.clientesVIP_mat.createIndex({ nombre: 1, edad: 1, pais: 1 }, { unique: true });

db.clientes.aggregate([
  { $addFields: { promedioCompras: { $avg: "$compras" } } },
  { $match: { promedioCompras: { $gt: 500 } } },
  { $project: { _id: 0, nombre: 1, edad: 1, pais: 1, promedioCompras: 1 } },
  { $merge: { into: "clientesVIP_mat", on: ["nombre","edad","pais"], whenMatched: "replace", whenNotMatched: "insert" } }
]);

print("Colección materializada 'clientesVIP_mat' (refrescada)");
