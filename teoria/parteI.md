# Parte I – Teoría conceptual

## a) ¿Qué es una colección basada en consultas y cómo se diferencia de una colección estática?
Colección basada en consultas: no guarda datos “propios”; muestra el resultado de una consulta (como una vista).

Dinámica: siempre refleja los datos más recientes al leer.

Materializada: guarda el resultado y se refresca cada cierto tiempo.

Colección estática: datos insertados “a mano” o por tu app. Solo cambian si haces insert/update/delete.

## b) Diferencias entre consulta ad‑hoc, vista materializada y colección dinámica
Consulta ad-hoc: la escribes y ejecutas una vez. Si la necesitas de nuevo, la vuelves a escribir/pegar.

Vista materializada: guardas el resultado de un pipeline para leer rápido después; debes actualizarla (job/trigger) para que no quede vieja.

Colección dinámica (vista con createView): no guarda resultados; calcula al leer. Siempre fresca, pero puede costar más CPU si el pipeline es pesado.

## c) Ventajas y desventajas de las colecciones basadas en consultas
**Ventajas**

Pros

Reutilizas la lógica (menos consultas repetidas).
Mejoras seguridad (expones solo lo necesario).
Con buenos índices, lees más rápido sin duplicar lógica.

**Desventajas**
Contras

Dinámica: si el pipeline es caro, puede lentificar lecturas.
Materializada: debes programar el refresco y cuidar la consistencia.
Más gobernanza: versionar pipelines, documentar, etc.
---

## Prueba de contenedor en el video
- Ejecutamos `docker ps` con `mongodb` y `mongo-express`.
- Conéctate con `mongosh`, ejecuta `docker exec -it mongodb mongosh -u root -p example --authenticationDatabase admin` `use udav_bd2` y corre una consulta simple (`db.runCommand({ ping: 1 })`).

