import { TestBed } from '@angular/core/testing';

import { IngresarVehiculoService } from './ingresar-vehiculo.service';

describe('IngresarVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngresarVehiculoService = TestBed.get(IngresarVehiculoService);
    expect(service).toBeTruthy();
  });
});
