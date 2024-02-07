import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembresiasRoutingModule } from './membresias-routing.module';
import { MembresiasComponent } from './membresias.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MembresiasComponent
  ],
  imports: [
    CommonModule,
    MembresiasRoutingModule,
    FormsModule
  ]
})
export class MembresiasModule { }
