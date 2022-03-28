import { TestBed } from '@angular/core/testing';
import { SumService } from './sum.service';
import { MultiplyBySumService } from './multiply-by-sum.service';

describe('MultiplierBySumService', () => {
  let sumServiceSpy: jasmine.SpyObj<SumService>;
  let multiplyBySumService: MultiplyBySumService;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('SubtractionService', ['sum']);
    TestBed.configureTestingModule({
      providers: [
        MultiplyBySumService,
        { provide: SumService, useValue: spy }
      ]
    });

    sumServiceSpy = TestBed.inject(SumService) as jasmine.SpyObj<SumService>;
    multiplyBySumService = TestBed.inject(MultiplyBySumService);

  });

  it('should be created', () => {
    expect(multiplyBySumService).toBeTruthy();
  });
  it('multiply(2,3) should return 6', () => {
    sumServiceSpy.sum.and.returnValues(2, 4, 6);
    expect(multiplyBySumService.multiply(2, 3)).toEqual(6);
  });
  it('multiply(0,5) should return 0', () => {
    sumServiceSpy.sum.and.returnValues(0, 0, 0, 0, 0);
    expect(multiplyBySumService.multiply(0, 0)).toEqual(0);
  });
  it('multiply(3,4) should return 12', () => {
    sumServiceSpy.sum.and.returnValues(3, 6, 9, 12);
    expect(multiplyBySumService.multiply(3, 4)).toEqual(12);
  });
});