import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFichaComponent } from './registrar-ficha.component';

describe('RegistrarFichaComponent', () => {
  let component: RegistrarFichaComponent;
  let fixture: ComponentFixture<RegistrarFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
