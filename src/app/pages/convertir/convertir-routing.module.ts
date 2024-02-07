import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertirComponent } from './convertir.component';

const routes: Routes = [
  {
    path: "",
    component: ConvertirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertirRoutingModule { }
