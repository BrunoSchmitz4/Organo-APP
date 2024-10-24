import { Routes } from '@angular/router';

import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { FormularioGeneroComponent } from './paginas/formulario-genero/formulario-genero.component';

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'formulario-genero',
    component: FormularioGeneroComponent
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  },
  {
    path: '**',
    component: ListaLivrosComponent
  },
];
