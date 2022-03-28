import { TestBed } from '@angular/core/testing';

import { SubtractionService } from './subtraction.service';

describe('SubtractionService', () => {
  let service: SubtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('subtraction(5,3) should return 2', () => {
    expect(service.subtraction(5,3)).toEqual(2);
  })
  it('subtraction(5,5) should return 0', () => {
    expect(service.subtraction(5,5)).toEqual(0);
  })
  it('subtraction(10,0) should return 10', () => {
    expect(service.subtraction(10,0)).toEqual(10);
  })
});
