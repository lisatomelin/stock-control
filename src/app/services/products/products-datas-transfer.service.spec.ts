import { TestBed } from '@angular/core/testing';

import { ProductsDatasTransferService } from './products-datas-transfer.service';

describe('ProductsDatasTransferService', () => {
  let service: ProductsDatasTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDatasTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
