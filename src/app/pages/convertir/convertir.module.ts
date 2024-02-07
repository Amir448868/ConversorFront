import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertirRoutingModule } from './convertir-routing.module';
import { ConvertirComponent } from './convertir.component';
import { FormsModule } from '@angular/forms';
import { HistorialComponent } from "../../components/historial/historial.component";
import { NuevousuarioComponent } from "../../components/editarusuario/nuevousuario.component";



@NgModule({
  declarations: [
    ConvertirComponent
  ],
  imports: [
    CommonModule,
    ConvertirRoutingModule,
    FormsModule,
    HistorialComponent,
    NuevousuarioComponent,

  ]
})
export class ConvertirModule { }
