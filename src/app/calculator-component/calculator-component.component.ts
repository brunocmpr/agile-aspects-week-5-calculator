import { Component, OnInit } from '@angular/core';
import { MultiplyBySumService } from '../multiply-by-sum.service';
import { SubtractionService } from '../subtraction.service';
import { SumService } from '../sum.service';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent {

  constructor(
    private sumService: SumService,
    private subtractionService: SubtractionService,
    private multiplyBySumService: MultiplyBySumService
  ) { }
  result: number = 0;
  operand1: number = 0;
  operand2: number = 0;

  sum(): void {
    this.result = this.sumService.sum(this.operand1, this.operand2);
  }

  subtract(): void {
    this.result = this.subtractionService.subtraction(this.operand1, this.operand2);
  }

  multiply(): void {
    this.result = this.multiplyBySumService.multiply(this.operand1, this.operand2);
  }

  reset(): void {
    this.operand1 = 0;
    this.operand2 = 0;
    this.result = 0;
  }

  roundOperand1(event: any): void {
    this.operand1 = Math.round(event.target.value);
  }

  roundOperand2(event: any): void {
    this.operand2 = Math.round(event.target.value);
  }
}
