import { Injectable } from "@angular/core";
import { GeneroLiterario } from "../../componentes/livro/livro";

@Injectable({
  providedIn: 'root'
})

export class FormularioGeneroService {
  listaGenero: GeneroLiterario[] = [];

  // Retorna lista de gênero
  getListaGenero(): GeneroLiterario[] {
    return this.listaGenero
  }

  // Adiciona gênero na lista de gênero
  addListaGeneroItem(novoGenero: GeneroLiterario): void {
    if(novoGenero.id != null)
      this.listaGenero.push(novoGenero)
  }

  // Remove gênero na lista de gênero
  delListaGeneroItem(genero: GeneroLiterario): void {
    this.listaGenero.forEach(gen => {
      if(gen.id == genero.id)
        this.listaGenero = this.listaGenero.filter(gen => gen)
    });
  }
}
