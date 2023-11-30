import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTransferenciaComponent } from './actualizar-transferencia.component';

describe('ActualizarTransferenciaComponent', () => {
  let component: ActualizarTransferenciaComponent;
  let fixture: ComponentFixture<ActualizarTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
