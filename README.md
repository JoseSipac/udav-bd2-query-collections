# UDAV - Bases de Datos 2 · Queries y colecciones basadas en consultas

Repositorio listo para **Universidad Da Vinci de Guatemala** · Ing. Brandon Antony Chitay Coutiño · **Septiembre 2025**.

## Estructura
```
docker/                 # Docker Compose para MongoDB + Mongo Express
teoria/                 # Parte I (Markdown)
queries/                # Parte II (scripts de inserción y consultas)
colecciones/            # Parte III (vistas/colecciones basadas en consultas)
proyecto_final/         # Parte IV (caso integrador + índices)
video/                  # https://youtu.be/fcw11pWU1as
```
---

## 1) Levantar el ambiente
Requisitos: Docker + Docker Compose.

```bash
cd docker
docker compose up -d
docker ps
```
- MongoDB en `mongodb://root:example@localhost:27017/` (authSource=admin)
- Mongo Express en **http://localhost:8082**

> El directorio `queries/` se monta como `docker-entrypoint-initdb.d` para inicialización.

## 2) Conectarte con `mongosh`
```bash
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin
```
Cambia a la BD de trabajo:
```js
use udav_bd2;
```
Verificamos que el contenedor Funciona:
```js
db.runCommand({ ping: 1 });
```
## 3) Datos de ejemplo (Parte II)
Inserta 20 documentos de `clientes`:

```bash
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /docker-entrypoint-initdb.d/insert_clientes.js
```

Consultas Parte II:
```bash
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /docker-entrypoint-initdb.d/a_mexico_gt25.js
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /docker-entrypoint-initdb.d/b_promedio_proyeccion.js
```

## 4) Colecciones basadas en consultas (Parte III)
Crear vistas/colecciones:
```bash
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /opt/colecciones/colecciones_setup.js

```
```bash
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin
```

Verificar:
```js
use udav_bd2;
db.clientes.countDocuments();
db.clientesVIP.find().limit(10).pretty();
db.pedidosActivos.find().pretty();
```
## 5) Caso integrador (Parte IV)
Crear vista de pedidos últimos 30 días + índices:
```bash
docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /opt/proyecto_final/pedidos_seed.js

docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /opt/proyecto_final/pedidosUltimos30_view.js

docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin /opt/proyecto_final/indexes.js
```

Verificar:
```js
use udav_bd2;
db.pedidos.find({}, { _id:0, pedidoId:1, fecha:1, estado:1 }).sort({ fecha:-1 });
db.pedidosUltimos30.find({}, { _id:0, pedidoId:1, fecha:1 }).sort({ fecha:-1 });
db.pedidos.getIndexes();

```

Justificamos ¿por qué no solo ad-hoc?:
```
Repetir la misma condición cada vez duplica lógica y es propenso a errores.

Sin vista, no hay un punto único de verdad; el equipo copia/pega queries.

Performance: con vistas y índices adecuados controlas el plan de ejecución.
Sólo ad-hoc puede provocar planes no óptimos y latencias variables.                 # 
```