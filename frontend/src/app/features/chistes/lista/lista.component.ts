import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChisteService } from '../../../core/services/chiste.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Chiste } from '../../../core/models/chiste.model';
import { Categoria } from '../../../core/models/categoria.model';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {
  chistes = signal<Chiste[]>([]);
  categorias = signal<Categoria[]>([]);
  loading = signal(true);
  filtro = signal('');

  chistesFiltrados = computed(() => {
    if (!this.filtro()) return this.chistes();
    return this.chistes().filter(c => String(c.categoria.id) === this.filtro());
  });

  total = computed(() => this.chistesFiltrados().length);

  constructor(
    private chisteService: ChisteService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.chisteService.getAll().subscribe(data => {
      this.chistes.set(data);
      this.loading.set(false);
    });
    this.categoriaService.getAll().subscribe(cats => this.categorias.set(cats));
  }

  setFiltro(id: string) {
    this.filtro.set(id);
  }
}