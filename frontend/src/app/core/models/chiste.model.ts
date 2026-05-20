export interface Chiste {
  id: number;
  texto: string;
  categoria: { id: number; nombre: string };
  comentarios?: Comentario[];
}

export interface Comentario {
  id: number;
  mensaje: string;
  chiste?: { id: number };
}