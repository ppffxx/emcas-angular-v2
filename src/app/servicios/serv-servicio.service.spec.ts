import { TestBed } from '@angular/core/testing';

import { ServServicioService } from './serv-servicio.service';

describe('ServServicioService', () => {
  let service: ServServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
