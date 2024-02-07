import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialhomeRoutingModule } from './historialhome-routing.module';
import { HistorialhomeComponent } from './historialhome.component';
import { HistorialComponent } from 'src/app/components/historial/historial.component';


@NgModule({
  declarations: [
    HistorialhomeComponent
  ],
  imports: [
    CommonModule,
    HistorialhomeRoutingModule,
    HistorialComponent
  ]
})
export class HistorialhomeModule { }
