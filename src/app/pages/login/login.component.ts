import { Component, Inject, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/user';
import { AuthService } from 'src/services/authservices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);

  loginData: LoginData = {
    UserName: "",
    Password: ""
  }

  roleUser = this.authService.roleUser;
  loginFailed = false;
  loading = false;


  login() {
    this.loading = true; // Muestra la rueda de carga
    this.authService.login(this.loginData).then(res => {
      if (res) {
        this.router.navigate(["/convertir"]);
      } else {
        this.loginFailed = true;
      }
      this.loading = false; // Oculta la rueda de carga
    });
  }

}
