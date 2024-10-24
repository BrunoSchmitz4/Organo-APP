import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LivroService } from './../../services/livro.service';
import { GeneroLiterario } from '../../componentes/livro/livro';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit{
  formulario!: FormGroup;
  generos: GeneroLiterario[] = []
  generoLivroService: LivroService = new LivroService;

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService,
    private router: Router,
  ) {}

  // Constrói um formulário na inicialização
  ngOnInit() {
      this.formulario = this.formBuilder.group({
        id: [''],
        titulo: [''],
      })
      this.generos = this.livroService.generos
  }

  // Adiciona um novo tipo de gênero literário
  adicionarGenero() {
    // const novoGenero: GeneroLiterario = {
    //   ...this.formulario.value,
    // }
    const novoGenero = {
      ...this.formulario.value,
      id: this.formulario.value,

    };
    console.log(novoGenero);

    this.livroService.adicionarGenero(novoGenero);
    this.formulario.reset();
    this.router.navigate(['lista-livros']);
  }
}
