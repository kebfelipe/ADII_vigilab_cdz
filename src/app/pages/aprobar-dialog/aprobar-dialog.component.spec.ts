import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarDialogComponent } from './aprobar-dialog.component';

describe('AprobarDialogComponent', () => {
  let component: AprobarDialogComponent;
  let fixture: ComponentFixture<AprobarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobarDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprobarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
