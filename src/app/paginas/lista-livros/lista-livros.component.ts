import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LivroComponent } from '../../componentes/livro/livro.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { UserInfoComponent } from "../../componentes/user-info/user-info.component";

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, FormularioComponent, CommonModule, RouterLink, FormularioGeneroComponent, UserInfoComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  livros: Livro[] = [];
  generos: GeneroLiterario[] = [];

  constructor(public livroService: LivroService) {}

  ngOnInit() {
    this.generos = this.livroService.generos;
  }

  ngOnChanges() {
    this.generos = this.livroService.generos;
  }
}
