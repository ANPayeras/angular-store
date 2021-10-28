import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalRegardComponent } from './final-regard.component';

const routes: Routes = [{ path: '', component: FinalRegardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalRegardRoutingModule { }
