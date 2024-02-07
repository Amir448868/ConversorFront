import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/userservices';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevousuarioComponent } from '../editarusuario/nuevousuario.component';
import { Coin } from 'src/app/interfaces/coin';
import { AuthService } from 'src/services/authservices';


@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule, NuevousuarioComponent]
})
export class UsersComponent {

  userServices = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)




  @Input({ required: true }) users !: User;


  BorrarContacto() {

    Swal.fire({
      title: 'Queres eliminar el usuario ' + this.users.userName,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userServices.delete(this.users.userId).then(res => {

          if (res) {
            Swal.fire(
              'Eliminado!',
              'El usuario ' + this.users.userName + ' fue eliminado correctamente',
              'success'
            );
            this.router.navigate(['/crudusers']);
          } else {
            Swal.fire(
              'Error!',
              'El usuario ' + this.users.userName + ' no pudo ser eliminado',
              'error'
            )
          }
        });

      }
    })
  };
}

