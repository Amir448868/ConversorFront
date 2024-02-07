import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertirComponent } from '../convertir/convertir.component';
import { MembresiasComponent } from './membresias.component';

const routes: Routes = [{
  path: "",
  component: MembresiasComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresiasRoutingModule { }
