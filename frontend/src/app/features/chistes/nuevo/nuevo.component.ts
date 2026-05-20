import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChisteService } from '../../../core/services/chiste.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/models/categoria.model';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nuevo.component.html'
})
export class NuevoComponent implements OnInit {
  categorias = signal<Categoria[]>([]);
  enviando = signal(false);
  form: any;

  constructor(
    private fb: FormBuilder,
    private chisteService: ChisteService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {
    this.form = this.fb.group({
      texto: ['', Validators.required],
      categoriaId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(cats => this.categorias.set(cats));
  }

  onSubmit() {
    if (this.form.valid) {
      this.enviando.set(true);
      const datos = {
        texto: this.form.value.texto,
        categoria: { id: Number(this.form.value.categoriaId) }
      };
      this.chisteService.create(datos).subscribe({
        next: (c) => this.router.navigate(['/chistes', c.id]),
        error: () => this.enviando.set(false)
      });
    }
  }
}