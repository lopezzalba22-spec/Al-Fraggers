import { Routes } from '@angular/router';
import { ListaComponent } from './features/chistes/lista/lista.component';
import { DetalleComponent } from './features/chistes/detalle/detalle.component';
import { NuevoComponent } from './features/chistes/nuevo/nuevo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chistes', pathMatch: 'full' },
  { path: 'chistes', component: ListaComponent },
  { path: 'chistes/nuevo', component: NuevoComponent },
  { path: 'chistes/:id', component: DetalleComponent }
];