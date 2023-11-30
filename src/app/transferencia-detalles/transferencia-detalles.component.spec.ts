import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaDetallesComponent } from './transferencia-detalles.component';

describe('OperacionDetallesComponent', () => {
  let component: TransferenciaDetallesComponent;
  let fixture: ComponentFixture<TransferenciaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
