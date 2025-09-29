// queries/b_promedio_proyeccion.js
db = db.getSiblingDB("udav_bd2");
print("Nombre y promedio de compras:");
db.clientes.aggregate([
  { $project: { _id: 0, nombre: 1, promedioCompras: { $avg: "$compras" } } }
]).forEach(doc => printjson(doc));
