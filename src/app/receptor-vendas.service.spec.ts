import { TestBed } from '@angular/core/testing';

import { ReceptorVendasService } from './receptor-vendas.service';

describe('ReceptorVendasService', () => {
  let service: ReceptorVendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptorVendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
