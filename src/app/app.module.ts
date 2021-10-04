import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiplyBySumService } from './multiply-by-sum.service';
import { SubtractionService } from './subtraction.service';

import { SumService } from './sum.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SumService,
    SubtractionService,
    MultiplyBySumService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
