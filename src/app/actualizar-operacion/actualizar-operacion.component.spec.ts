import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOperacionComponent } from './actualizar-operacion.component';

describe('ActualizarOperacionComponent', () => {
  let component: ActualizarOperacionComponent;
  let fixture: ComponentFixture<ActualizarOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarOperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
