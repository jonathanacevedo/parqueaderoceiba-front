import { TestBed } from '@angular/core/testing';

import { ListarVehiculosService } from './listar-vehiculos.service';

describe('ListarVehiculosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarVehiculosService = TestBed.get(ListarVehiculosService);
    expect(service).toBeTruthy();
  });
});
