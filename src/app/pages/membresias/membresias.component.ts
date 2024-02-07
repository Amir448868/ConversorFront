import { Component, Input, OnInit, inject } from '@angular/core';
import { Conversion } from 'src/app/interfaces/conversion';
import { User, UserForUpdate } from 'src/app/interfaces/user';
import { AuthService } from 'src/services/authservices';
import { ConversionServices } from 'src/services/conversionservices';
import { UserService } from 'src/services/userservices';

@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.css']
})
export class MembresiasComponent implements OnInit {

  authServices = inject(AuthService);
  usersServices = inject(UserService);



  user: UserForUpdate = {
    userId: 0,
    userName: '',
    typeUser: '',
    roleid: 0
  };

  async editarUsuario(tipoSuscripcion: string) {
    this.user.typeUser = tipoSuscripcion;

    try {
      const res = await this.usersServices.edit(this.user);

      if (res) {
        console.log('Solicitud PUT exitosa', res);
      } else {
        console.error('La solicitud PUT no fue exitosa', res);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud PUT', error);
    }
  }

  ngOnInit(): void {

    const userid = this.authServices.userid;

    this.usersServices.getById(userid).then(users => {
      this.user = users
    });
  }
}
