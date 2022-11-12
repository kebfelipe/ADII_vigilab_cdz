import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfichasComponent } from './verfichas.component';

describe('VerfichasComponent', () => {
  let component: VerfichasComponent;
  let fixture: ComponentFixture<VerfichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfichasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerfichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
