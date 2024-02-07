import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterData, UserForCreate } from 'src/app/interfaces/user';
import { AuthService } from 'src/services/authservices';
import { UserService } from 'src/services/userservices';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  authService = inject(AuthService);
  userServices = inject(UserService);
  router = inject(Router);

  registerData: UserForCreate = {
    userName: "",
    password: "",
    typeUser: "free",
    roleid: 1
  }

  async crearUsuario() {
    const res = await this.userServices.create(this.registerData)

    if (res) {
      this.router.navigate(['/login'])
    }
  }
}
