import { TestBed } from '@angular/core/testing';

import { ContactTableFormService } from './contact-table-form.service';

describe('ContactTableFormService', () => {
  let service: ContactTableFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactTableFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
