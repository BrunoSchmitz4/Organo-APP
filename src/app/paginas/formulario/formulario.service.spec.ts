import { FormularioService } from "./FormularioService";
import { Livro } from "../../componentes/livro/livro";

describe('Service do Formulário de Livros', () => {
  let servico: FormularioService;

  beforeEach(() => {
    servico = new FormularioService();
  });

  // Teste para retornar a lista do tipo livro vazia
  it('Deveria retornar uma lista de livros vazia', () => {
    expect(servico.getListaLivro()).toEqual([]);
  });

  // Teste para adicionar um item na lista do tipo livro
  it('Deveria adicionar um livro na lista', () => {
    const livro: Livro = {
      titulo: 'Pokémon Black and White, Volume 1',
      autoria: 'Satoshi Yamamoto',
      genero: {
        id: 'fantasia',
        value: 'Fantasia'
      },
      dataLeitura: '2024-02-06',
      classificacao: 5,
      imagem: 'https://m.media-amazon.com/images/I/81Vj6z4bNnL._SY342_.jpg'
    }
    servico.addListaLivroItem(livro);
    expect(servico.getListaLivro()).toContain(livro);
  })

  // Teste para deletar um gênero de uma lista vazia
  it('Deveria deletar um livro de uma lista de livros', () => {
    const livro: Livro = {
      titulo: 'Pokémon Black and White, Volume 1',
      autoria: 'Satoshi Yamamoto',
      genero: {
        id: 'fantasia',
        value: 'Fantasia'
      },
      dataLeitura: '2024-02-06',
      classificacao: 5,
      imagem: 'https://m.media-amazon.com/images/I/81Vj6z4bNnL._SY342_.jpg'
    }
    servico.delListaLivroItem(livro);
    expect(servico.getListaLivro()).not.toContain(livro);
  })
  // it('Deveria atualizar um livro na lista', () => {
  //   const livro: Livro = {
  //     titulo: 'Pokémon Black and White, Volume 2',
  //     autoria: 'Satoshi Yamamoto',
  //     genero: {
  //       id: 'romance',
  //       value: 'Romance'
  //     },
  //     dataLeitura: '2024-02-03',
  //     classificacao: 3,
  //     imagem: 'https://m.media-amazon.com/images/I/81Vj6z4bNnL._SY342_.jpg'
  //   }
  //   servico.updateLivro(livro);
  //   expect(servico.getListaLivro()).toContain(livro);
  // })


})
