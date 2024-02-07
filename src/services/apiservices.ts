import { Injectable, inject } from '@angular/core';
import { AuthService } from './authservices';
import { API } from 'src/app/constantes/API';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth = inject(AuthService);
  constructor() { }

  async getAuth(endpoint: string) {
    const res = await fetch(API + endpoint, {
      headers: {
        Authorization: "Bearer " + this.auth.token
      }
    });
    if (res.status === 401) {
      this.auth.logOut();
    }
    return res;
  }
}
