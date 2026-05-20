import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/chiste.model';

@Injectable({ providedIn: 'root' })
export class ComentarioService {
  private api = 'http://localhost:8080/comentarios';
  constructor(private http: HttpClient) {}

  create(comentario: any): Observable<Comentario> {
    return this.http.post<Comentario>(this.api, comentario);
  }
}