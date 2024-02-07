import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserForUpdate } from 'src/app/interfaces/user';
import { UserService } from 'src/services/userservices';
import { generarMensajeError, generarMensajeExito } from 'src/app/ayudantes/mensajes';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent {
  userServices = inject(UserService);
  router = inject(Router);

  roleUsuarioOpciones = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'User' }
  ];



  @Input() users: UserForUpdate = {
    userId: 0,
    userName: '',
    typeUser: '',
    roleid: 0
  };

  @Output() cerrar = new EventEmitter();

  tipoUsuarioOpciones: string[] = ["free", "trial", "premium"];


  async editarUsuario() {
    const res = await this.userServices.editusers(this.users) //Llamamos al scontacts.service para editar el contacto
    this.cerrar.emit() //Emitimos el evento cerrar
    if (res) { //Si la respuesta es correcta, emitimos el evento cerrar y mostramos un mensaje de exito
      generarMensajeExito('Usuario editado')
    } else { //Si la respuesta es incorrecta, emitimos el evento cerrar y mostramos un mensaje de error
      generarMensajeError('No se ha podido editar el usuario')
    }
  }
}
