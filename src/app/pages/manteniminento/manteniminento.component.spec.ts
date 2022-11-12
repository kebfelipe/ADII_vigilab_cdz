import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteniminentoComponent } from './manteniminento.component';

describe('ManteniminentoComponent', () => {
  let component: ManteniminentoComponent;
  let fixture: ComponentFixture<ManteniminentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteniminentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteniminentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
