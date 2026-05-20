-- ============================================================
--  DATA.SQL  –  Datos de ejemplo · App de Chistes
--  Colocar en:  src/main/resources/data.sql
-- ============================================================

-- ──────────────────────────────────────────────
--  CATEGORIAS  (5 registros)
-- ──────────────────────────────────────────────
INSERT INTO categoria (nombre) VALUES
    ('Humor absurdo'),
    ('Chistes de papá'),
    ('Tecnología'),
    ('Animales'),
    ('Trabajo');

-- ──────────────────────────────────────────────
--  CHISTES  (12 registros repartidos por categoría)
-- ──────────────────────────────────────────────

-- Humor absurdo (categoria_id = 1)
INSERT INTO chiste (texto, categoria_id) VALUES
    ('¿Por qué los pájaros vuelan hacia el sur en invierno? Porque andando tardarían demasiado.', 1),
    ('Un señor entra en una biblioteca y dice: "Póngame un café". La biblioteca le responde: "Esto es una biblioteca". El señor susurra: "Perdone, póngame un café".', 1),
    ('¿Cuántos surrealistas hacen falta para cambiar una bombilla? Un pez.', 1);

-- Chistes de papá (categoria_id = 2)
INSERT INTO chiste (texto, categoria_id) VALUES
    ('¿Qué le dijo el 0 al 8? Bonito cinturón.', 2),
    ('¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas.', 2),
    ('¿Qué hace una abeja en el gimnasio? ¡Zum-ba!', 2);

-- Tecnología (categoria_id = 3)
INSERT INTO chiste (texto, categoria_id) VALUES
    ('Un SQL entra en un bar, se acerca a dos mesas y pregunta: "¿Puedo unirme a vosotros?"', 3),
    ('¿Por qué los programadores prefieren el frío? Porque en el calor hay más bugs.', 3);

-- Animales (categoria_id = 4)
INSERT INTO chiste (texto, categoria_id) VALUES
    ('¿Qué le dice un jaguar a otro jaguar? Jaguar you.', 4),
    ('¿Cómo se llama un perro sin patas? Da igual, total no va a venir.', 4);

-- Trabajo (categoria_id = 5)
INSERT INTO chiste (texto, categoria_id) VALUES
    ('Jefe: "Llegas tarde". Empleado: "Sí, pero me fui pronto".', 5),
    ('Mi jefe me dijo que hiciera lo que me hiciera feliz, así que me fui a casa.', 5);

-- ──────────────────────────────────────────────
--  COMENTARIOS  (10 registros)
-- ──────────────────────────────────────────────
INSERT INTO comentario (mensaje, chiste_id) VALUES
    ('¡Me ha sacado una carcajada!', 1),
    ('No lo pillo...', 1),
    ('Clásico imprescindible', 2),
    ('Este lo contaré en la cena de Navidad', 2),
    ('Jajajaja, muy bueno', 3),
    ('Un poco viejo pero siempre funciona', 5),
    ('Los programadores lo entendemos demasiado bien', 7),
    ('Dios mío, esto es mi vida', 8),
    ('Literalmente mi jefe ayer', 11),
    ('El chiste más real que he leído', 12);
