import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudcoinsRoutingModule } from './crudcoins-routing.module';
import { CrudcoinsComponent } from './crudcoins.component';
import { CoinsComponent } from "../../components/coins/coins.component";
import { CrearcoinsComponent } from "../../components/crearcoins/crearcoins.component";


@NgModule({
  declarations: [
    CrudcoinsComponent
  ],
  imports: [
    CommonModule,
    CrudcoinsRoutingModule,
    CoinsComponent,
    CrearcoinsComponent
  ]
})
export class CrudcoinsModule { }
