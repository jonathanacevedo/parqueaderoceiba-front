import { TestBed } from '@angular/core/testing';

import { ObtenerTRMService } from './obtener-trm.service';

describe('ObtenerTRMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerTRMService = TestBed.get(ObtenerTRMService);
    expect(service).toBeTruthy();
  });
});
