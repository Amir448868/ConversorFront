import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudcoinsComponent } from './crudcoins.component';

const routes: Routes = [
  {
    path: "",
    component: CrudcoinsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudcoinsRoutingModule { }
