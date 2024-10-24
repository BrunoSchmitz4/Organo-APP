import { AvaliacaoEstrelasComponent } from './avaliacao-estrelas.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Componente Avaliação Estrelas', () => {
  let component: AvaliacaoEstrelasComponent;
  let fixture: ComponentFixture<AvaliacaoEstrelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoEstrelasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoEstrelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deveria criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
