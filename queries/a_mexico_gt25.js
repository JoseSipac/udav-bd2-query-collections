// queries/a_mexico_gt25.js
db = db.getSiblingDB("udav_bd2");
print("Clientes de México con edad > 25:");
db.clientes.find({ pais: "México", edad: { $gt: 25 } }).forEach(doc => printjson(doc));
