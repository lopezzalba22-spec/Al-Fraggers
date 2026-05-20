import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ChisteService } from '../../../core/services/chiste.service';
import { ComentarioService } from '../../../core/services/comentario.service';
import { Chiste, Comentario } from '../../../core/models/chiste.model';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
  chiste = signal<Chiste | null>(null);
  comentarios = signal<Comentario[]>([]);
  enviado = signal(false);
  form: any;

  constructor(
    private route: ActivatedRoute,
    private chisteService: ChisteService,
    private comentarioService: ComentarioService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      mensaje: ['', Validators.required],
      autor: ['']
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chisteService.getById(id).subscribe(c => {
      this.chiste.set(c);
      this.comentarios.set(c.comentarios || []);
    });
  }

  enviar() {
    if (this.form.valid) {
      const nuevo = {
        mensaje: this.form.value.mensaje,
        chiste: { id: this.chiste()?.id }
      };
      this.comentarioService.create(nuevo).subscribe(c => {
        this.comentarios.update(lista => [...lista, c]);
        this.form.reset();
        this.enviado.set(true);
        setTimeout(() => this.enviado.set(false), 2000);
      });
    }
  }
}