import { TestBed } from '@angular/core/testing';

import { TablaContactosService } from './tabla-contactos.service';

describe('TablaContactosService', () => {
  let service: TablaContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
