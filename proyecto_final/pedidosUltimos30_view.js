// proyecto_final/pedidosUltimos30_view.js
db = db.getSiblingDB("udav_bd2");
db.pedidosUltimos30 && db.pedidosUltimos30.drop();

db.createView("pedidosUltimos30", "pedidos", [
  {
    $match: {
      $expr: {
        $gte: [
          "$fecha",
          { $dateSubtract: { startDate: "$$NOW", unit: "day", amount: 30 } }
        ]
      }
    }
  }
]);

print("Vista 'pedidosUltimos30' creada");
