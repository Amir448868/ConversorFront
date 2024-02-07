import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/services/userservices';
import { RegisterData, User, UserForCreate } from 'src/app/interfaces/user';
import { generarMensajeError, generarMensajeExito } from 'src/app/ayudantes/mensajes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crearusuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent {

  tipoUsuarioOpciones: string[] = ["free", "trial", "premium"];
  roleUsuarioOpciones = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'User' }
  ];


  userServices = inject(UserService);

  @Output() cerrar = new EventEmitter();

  user: UserForCreate = {
    userName: '',
    password: '',
    typeUser: 'free',
    roleid: 1
  };



  async crearUsuario() {
    const res = await this.userServices.create(this.user)
    this.cerrar.emit()

    if (res) {
      generarMensajeExito('Usuario creado')
    } else {
      generarMensajeError('No se ha podido crear el usuario')
    }
  }
}





