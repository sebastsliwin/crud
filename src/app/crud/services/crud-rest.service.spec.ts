import { TestBed } from '@angular/core/testing';

import { CrudRestService } from './crud-rest.service';

describe('CrudRestService', () => {
  let service: CrudRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
