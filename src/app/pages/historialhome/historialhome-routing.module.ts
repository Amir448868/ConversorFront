import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialhomeComponent } from './historialhome.component';

const routes: Routes = [
  {
    path: '',
    component: HistorialhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialhomeRoutingModule { }
