import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudusersComponent } from './crudusers.component';

const routes: Routes = [
  {
    path: "",
    component: CrudusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudusersRoutingModule { }
