import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtractionService {

  constructor() { }

  subtraction(a: number, b: number): number{
    return (a - b);
  }
}
