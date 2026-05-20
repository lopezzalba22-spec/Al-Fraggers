-- ============================================================
--  SCHEMA.SQL  –  Proyecto FP Dual · App de Chistes
--  Base de datos H2 (en memoria)
--  Relaciones:  CATEGORIA 1:M CHISTE  y  CHISTE 1:M COMENTARIO
--  Colocar en:  src/main/resources/schema.sql
-- ============================================================

DROP TABLE IF EXISTS comentario;
DROP TABLE IF EXISTS chiste;
DROP TABLE IF EXISTS categoria;

-- ──────────────────────────────────────────────
--  CATEGORIA  (lado "1" de la primera relación)
-- ──────────────────────────────────────────────
CREATE TABLE categoria (
    id     BIGINT       AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- ──────────────────────────────────────────────
--  CHISTE  (lado "M" de categoria, lado "1" de comentario)
-- ──────────────────────────────────────────────
CREATE TABLE chiste (
    id           BIGINT        AUTO_INCREMENT PRIMARY KEY,
    texto        VARCHAR(1000) NOT NULL,
    categoria_id BIGINT        NOT NULL,

    CONSTRAINT fk_chiste_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categoria(id)
        ON DELETE CASCADE
);

-- ──────────────────────────────────────────────
--  COMENTARIO  (lado "M" de la segunda relación)
-- ──────────────────────────────────────────────
CREATE TABLE comentario (
    id        BIGINT        AUTO_INCREMENT PRIMARY KEY,
    mensaje   VARCHAR(500)  NOT NULL,
    chiste_id BIGINT        NOT NULL,

    CONSTRAINT fk_comentario_chiste
        FOREIGN KEY (chiste_id)
        REFERENCES chiste(id)
        ON DELETE CASCADE
);
