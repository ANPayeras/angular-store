import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRegardRoutingModule } from './final-regard-routing.module';
import { FinalRegardComponent } from './final-regard.component';


@NgModule({
  declarations: [
    FinalRegardComponent
  ],
  imports: [
    CommonModule,
    FinalRegardRoutingModule
  ]
})
export class FinalRegardModule { }
