import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPokemonesComponent } from './buscador-pokemones.component';

describe('BuscadorPokemonesComponent', () => {
  let component: BuscadorPokemonesComponent;
  let fixture: ComponentFixture<BuscadorPokemonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorPokemonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
