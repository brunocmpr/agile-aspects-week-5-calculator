import { Injectable } from '@angular/core';
import { SumService } from './sum.service';
@Injectable({
  providedIn: 'root'
})
export class MultiplyBySumService {

  constructor(private sumService: SumService) { }
  
  multiply(num1: number, num2: number): number {
    let result = this.accumulateSum(num1, num2);
    result = result * num2/Math.abs(num2);
    return result;
  }

  private accumulateSum(num1: number, num2: number): number {
    let result = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
      result = this.sumService.sum(result, num1);
    }
    return result;
  }
}
