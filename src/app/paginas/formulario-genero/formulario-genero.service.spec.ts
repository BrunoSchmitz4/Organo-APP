import { GeneroLiterario } from './../../componentes/livro/livro';
import { FormularioGeneroService } from "./formulario-GeneroService";

describe('Service do Formulário de Gêneros', () => {
  let servico: FormularioGeneroService;

  beforeEach(() => {
    servico = new FormularioGeneroService();
  });

  // Teste para retornar uma lista de gêneros vazia
  it('Deveria retornar uma lista de gêneros vazia', () => {
    expect(servico.getListaGenero()).toEqual([]);
  })

  // Teste para adicionar um gênero à uma lista vazia
  it('Deveria adicionar um gênero à uma lista de gêneros', () => {
    const genero: GeneroLiterario = {
      id: 'terror',
      value: 'Terror'
    }
    servico.addListaGeneroItem(genero);
    expect(servico.getListaGenero()).toContain(genero);
  })

  // Teste para deletar um gênero de uma lista vazia
  it('Deveria deletar um gênero de uma lista de gêneros', () => {
    const genero: GeneroLiterario = {
      id: 'terror',
      value: 'Terror'
    }
    servico.delListaGeneroItem(genero);
    expect(servico.getListaGenero()).not.toContain(genero);
  })

  // Teste para atualizar um gênero de uma lista
  // it('Deveria atualizar um gênero na lista de gêneros', () => {
  //   const novoGenero: GeneroLiterario = {
  //     id: 'acao',
  //     value: 'Ação'
  //   }
  //   servico.listaGenero.forEach(gen => {
  //     if(gen.id === 'terror') {
  //       servico.delListaGeneroItem(gen);
  //       servico.addListaGeneroItem(novoGenero);
  //     }
  //   })
  //   // let novoArray: GeneroLiterario[] = servico.listaGenero.map(gen =>
  //   //   gen.id === 'terror' ? { ... gen, gen: novoGenero} : gen
  //   // );
  //   expect(servico.getListaGenero).toContain(novoGenero);
  // })


});
