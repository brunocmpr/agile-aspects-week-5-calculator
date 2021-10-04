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
});