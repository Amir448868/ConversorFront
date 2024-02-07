import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'src/app/constantes/API';
import { LoginData, RegisterData } from 'src/app/interfaces/user';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null;
  userid: number;
  roleUser: string | null;
  router = inject(Router);


  constructor() {
    this.token = localStorage.getItem('token');
    this.userid = parseInt(localStorage.getItem('userId') || '0');
    this.roleUser = localStorage.getItem('roleUser');
  }



  async login(loginData: LoginData) {
    const res = await fetch(API + "authentication/autenticar/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!res.ok) return false;

    const tokenRecibido = await res.text();

    // Decodificar el token para obtener la información del usuario
    const decodedToken = JSON.parse(atob(tokenRecibido.split('.')[1]));

    // Obtener el ID de usuario del token
    const userId = decodedToken.sub; // "sub" es la clave que representa el ID de usuario
    const roleUser = decodedToken.role;

    // Almacenar el token y el ID de usuario en el localStorage
    localStorage.setItem("token", tokenRecibido);
    localStorage.setItem("userId", userId);
    localStorage.setItem("roleUser", roleUser);

    this.token = tokenRecibido;
    this.userid = userId;
    this.roleUser = roleUser;

    return true;
  }





  async register(registerData: RegisterData) {
    const res = await fetch(API + "User", {
      method: "POST",
      body: JSON.stringify(registerData)
    });
    console.log("REGISTRANDO", res)
  }


  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("roleUser");
    this.token = null;
    this.userid = 0;
    this.roleUser = null;
    this.router.navigate(['/login']);
  }

}
