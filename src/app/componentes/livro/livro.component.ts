import { LivroService } from './../../services/livro.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Livro } from './livro';
import { AvaliacaoEstrelasComponent } from '../avaliacao-estrelas/avaliacao-estrelas.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [
    CommonModule,
    AvaliacaoEstrelasComponent
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() livro!: Livro;
  miau = 0

  constructor(public livroService: LivroService, private router: Router) {

  }

  public delLivro() {
    this.livroService.removerLivroPorTitulo(this.livro.autoria, this.livro.genero)
    this.router.navigate(['lista-livros']);
  }
}
