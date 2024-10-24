import { Injectable } from "@angular/core";
import { Livro } from "../../componentes/livro/livro";

@Injectable({
  providedIn: 'root'
})

export class FormularioService {
  private listaLivro: Livro[] = [];

  // Retorna lista de livros
  getListaLivro(): Livro[] {
    return this.listaLivro;
  }

  // Adiciona livro na lista de livros
  addListaLivroItem(livro: Livro): void {
    this.listaLivro.push(livro);
  }

  // Atualiza informações do livro
  updateLivro(livro: Livro): void {
    let tituloLivro = livro;
    this.listaLivro.forEach(li => {
      if (li.titulo == tituloLivro.titulo) {
        this.listaLivro = this.listaLivro.filter(li => li)
        this.listaLivro.push(livro);
      }
    });
    console.log(livro)
  }

  // Remove livro na lista de gênero
  delListaLivroItem(livro: Livro): void {
    this.listaLivro.forEach(li => {
      if(livro.titulo == li.titulo)
        this.listaLivro = this.listaLivro.filter(li => li)
    });
  }
}
