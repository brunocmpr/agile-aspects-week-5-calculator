import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiplyBySumService } from './multiply-by-sum.service';
import { SubtractionService } from './subtraction.service';

import { SumService } from './sum.service';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    SumService,
    SubtractionService,
    MultiplyBySumService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
