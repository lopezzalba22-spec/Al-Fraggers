import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chiste } from '../models/chiste.model';

@Injectable({ providedIn: 'root' })
export class ChisteService {
  private api = 'http://localhost:8080/chistes';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Chiste[]> {
    return this.http.get<Chiste[]>(this.api);
  }

  getById(id: number): Observable<Chiste> {
    return this.http.get<Chiste>(`${this.api}/${id}`);
  }

  getPorCategoria(categoriaId: number): Observable<Chiste[]> {
    return this.http.get<Chiste[]>(`${this.api}/categoria/${categoriaId}`);
  }

  create(chiste: any): Observable<Chiste> {
    return this.http.post<Chiste>(this.api, chiste);
  }
}