import { CabecalhoComponent } from './cabecalho.component';
import { TestBed } from '@angular/core/testing';

// TestBed é um utilitário de extrema importância para testes em Angular
describe('Componente cabeçalho', () => {
  let component: CabecalhoComponent
  beforeEach(() => {

    // Módulo de teste para configuração de testes
    TestBed.configureTestingModule({
      imports: [CabecalhoComponent],
    })

    component = new CabecalhoComponent;
  });

  it('Deveria criar e exibir o componente', () => {
    expect(component).toBeTruthy();
  });
});
