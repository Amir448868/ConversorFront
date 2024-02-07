import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudusersRoutingModule } from './crudusers-routing.module';
import { CrudusersComponent } from './crudusers.component';
import { UsersComponent } from 'src/app/components/users/users.component';
import { CrearusuarioComponent } from "../../components/crearusuario/crearusuario.component";


@NgModule({
    declarations: [
        CrudusersComponent
    ],
    imports: [
        CommonModule,
        CrudusersRoutingModule,
        UsersComponent,
        CrearusuarioComponent
    ]
})
export class CrudusersModule { }
