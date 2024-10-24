import { TestBed } from "@angular/core/testing";
import { GeneroLiterario, Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";
import { LivroService } from "./livro.service"

describe("Service de Livro", () => {
    let service: LivroService;

    // Cria um novo cenário após cada spec,
    // evitando conflitos de cenário de teste
    beforeEach(()=> {
        TestBed.configureTestingModule({
            providers: [LivroService]
        })
        service = TestBed.inject(LivroService);
    })

    it('Deveria ser criado', () => {
        expect(service).toBeTruthy();
    })

    // Aplicando convenção (padrão de testes) Arrange Act Assert (AAA):

    it('Deveria adicionar um novo livro', () => {
        const novoLivro: Livro = {
            titulo: 'Novo Livro',
            autoria: 'Autor Desconhecido',
            imagem: 'http://example.com/cover.jpg',
            genero: {id: 'romance', value: 'Romance'},
            dataLeitura: '2024-04-19',
            classificacao: 5
        };
        service.adicionarLivro(novoLivro);
        const livrosPorGenero = service.obterLivrosPorGenero('romance');
        expect(livrosPorGenero).toContain(novoLivro);
    })

    it('Deveria recuperar corretamente os livros por gênero', () => {
        const livrosPorGenero = service.obterLivrosPorGenero('romance');
        const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance');
        expect(livrosPorGenero).toEqual(livrosEsperados);
    });

    it('Deveria inicializar os gêneros corretamente', () => {
        const generosEsperados: GeneroLiterario[] = [
            { id: 'romance', value: 'Romance'},
            { id: 'misterio', value: 'Mistério'},
            { id: 'fantasia', value: 'Fantasia'},
            { id: 'ficcao-cientifica', value: 'Ficção Científica'},
            { id: 'tecnicos', value: 'Técnicos'},
            { id: 'terror', value: 'Terror'}
        ];
        expect(service.generos).toEqual(generosEsperados);
    });

    // it('Deveria lançar um erro ao tentar cadastrar um livro com gênero desconhecido', () => {
    //     const novoLivro: Livro = {
    //         titulo: 'Novo Livro',
    //         autoria: 'Autor Desconhecido',
    //         imagem: 'http://example.com/cover.jpg',
    //         genero: {id: 'nao-existe', value: 'Não Existe'},
    //         dataLeitura: '2024-04-19',
    //         classificacao: 5
    //     };

    //     expect(() => service.adicionarLivro(novoLivro)).toThrow(ErroGeneroLiterario)
    // })
})