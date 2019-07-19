import { TestBed } from '@angular/core/testing';

import { RetirarVehiculoService } from './retirar-vehiculo.service';

describe('RetirarVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetirarVehiculoService = TestBed.get(RetirarVehiculoService);
    expect(service).toBeTruthy();
  });
});
