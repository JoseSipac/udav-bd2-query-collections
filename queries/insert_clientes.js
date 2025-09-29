// queries/insert_clientes.js
db = db.getSiblingDB("udav_bd2");

db.clientes.drop();

db.clientes.insertMany([
  { nombre: "Ana", edad: 28, pais: "México", compras: [120, 340, 560] },
  { nombre: "Luis", edad: 35, pais: "Guatemala", compras: [200, 150, 80, 1200] },
  { nombre: "María", edad: 22, pais: "México", compras: [50, 75, 100] },
  { nombre: "Carlos", edad: 27, pais: "México", compras: [600, 550, 700] },
  { nombre: "Sofía", edad: 31, pais: "Colombia", compras: [300, 400, 500] },
  { nombre: "Jorge", edad: 29, pais: "México", compras: [800, 200, 1000] },
  { nombre: "Lucía", edad: 24, pais: "Perú", compras: [90, 110] },
  { nombre: "Miguel", edad: 41, pais: "México", compras: [1200, 900] },
  { nombre: "Elena", edad: 26, pais: "Guatemala", compras: [200, 220, 240] },
  { nombre: "Diego", edad: 33, pais: "México", compras: [300, 700, 900, 1000] },
  { nombre: "Valeria", edad: 19, pais: "México", compras: [45, 60] },
  { nombre: "Andrés", edad: 38, pais: "Chile", compras: [500, 500, 500] },
  { nombre: "Paola", edad: 30, pais: "México", compras: [480, 520, 510] },
  { nombre: "Ricardo", edad: 27, pais: "Argentina", compras: [2000] },
  { nombre: "Fernanda", edad: 36, pais: "México", compras: [300, 400] },
  { nombre: "José", edad: 28, pais: "Guatemala", compras: [50, 60, 70] },
  { nombre: "Laura", edad: 32, pais: "México", compras: [1000, 800, 1200] },
  { nombre: "Roberto", edad: 25, pais: "México", compras: [520, 510, 530] },
  { nombre: "Camila", edad: 29, pais: "Costa Rica", compras: [250, 260] },
  { nombre: "Héctor", edad: 45, pais: "México", compras: [1500, 2000, 1000] }
]);

print("Clientes insertados:", db.clientes.countDocuments());
