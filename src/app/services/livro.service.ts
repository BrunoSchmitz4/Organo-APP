import { Injectable } from '@angular/core';
import { FormularioService } from '../paginas/formulario/FormularioService';

import { GeneroLiterario, Livro } from '../componentes/livro/livro';
import { livros } from '../mock-livros'
import { FormularioGeneroService } from '../paginas/formulario-genero/formulario-GeneroService';

export class ErroGeneroLiterario extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ErroGeneroLiterario";
  }
}

export class ErroGeneroLiterarioId extends Error {

  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ErroGeneroLiterarioId"
  }
}
@Injectable({
  providedIn: 'root'
})
export class LivroService {
  listaLivro: Livro[] = [];
  listaTeste: number[] = [1, 2, 3, 4, 5]

  public generos: GeneroLiterario[] = [
    {
      id: 'romance',
      value: 'Romance'
    },
    {
      id: 'misterio',
      value: 'Mistério'
    },
    {
      id: 'fantasia',
      value: 'Fantasia'
    },
    {
      id: 'ficcao-cientifica',
      value: 'Ficção Científica'
    },
    {
      id: 'tecnicos',
      value: 'Técnicos'
    },
  ]

  private livrosPorGenero: Map<string, Livro[]> = new Map();
  constructor() {
    let generoService: FormularioGeneroService = new FormularioGeneroService();

    const genero: GeneroLiterario = {
      id: 'terror',
      value: 'Terror'
    }
    generoService.addListaGeneroItem(genero);

    // Exibição dos testes adicionando livros e gêneros
    generoService.getListaGenero().forEach(gen => {
      this.generos.push(gen);
    })

    this.generos.forEach(genero => {
      this.livrosPorGenero.set(genero.id, []);
    });

    livros.forEach(livro => {
      this.livrosPorGenero.get(livro.genero.id)?.push(livro)
    });


  }

  adicionarLivro(novoLivro: Livro) {
    if (!this.livrosPorGenero.has(novoLivro.genero.id)) {
      throw new ErroGeneroLiterario("Gênero literário desconhecido");
    }
    this.livrosPorGenero.get(novoLivro.genero.id)?.push(novoLivro);
  }

  adicionarGenero(genero: GeneroLiterario) {
    if (!genero.id) {
      console.log("Gênero sem id: " + genero.id);
      throw new ErroGeneroLiterario("Gênero literário desconhecido");
    }
    console.log(genero)
    this.generos.push(genero)
  }

  getGeneros() {
    return this.generos;
  }

  obterLivrosPorGenero(genero: string): Livro[] {
    return this.livrosPorGenero.get(genero) || [];
  }

  removerLivroPorTitulo(titulo: string, genero: GeneroLiterario) {
    this.listaLivro = this.obterLivrosPorGenero(genero.value)
    this.listaLivro.forEach(livro => {
      if(livro.titulo == titulo) this.listaLivro.pop()
    })
    // this.listaLivro.forEach(livro => {
    //   if(livro.titulo == titulo) {
    //     this.listaLivro.filter(livro => livro.titulo == titulo)
    //     console.log(livro)
    //   }
    // });
    this.listaTeste.pop()
    console.log(this.listaTeste)
  }
}
