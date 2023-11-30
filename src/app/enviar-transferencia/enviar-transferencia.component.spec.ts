import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarTransferenciaComponent } from './enviar-transferencia.component';

describe('EnviarTransferenciaComponent', () => {
  let component: EnviarTransferenciaComponent;
  let fixture: ComponentFixture<EnviarTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
