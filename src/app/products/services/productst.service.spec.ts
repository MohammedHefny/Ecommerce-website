import { TestBed } from '@angular/core/testing';

import { ProductstService } from './productst.service';

describe('ProductstService', () => {
  let service: ProductstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
