import { API } from 'src/app/constantes/API';
import { ApiService } from './apiservices';
import { Coin } from 'src/app/interfaces/coin';
import { Injectable } from '@angular/core';
import { Conversion, ConversionCreate } from 'src/app/interfaces/conversion';

@Injectable({
  providedIn: 'root'
})
export class ConversionServices extends ApiService {


  async convertir(conversion: ConversionCreate): Promise<any> {
    const res = await fetch(API + "Conversion/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token,
      },
      body: JSON.stringify(conversion),
    });

    if (res.ok) {
      const resJson = await res.json();
      return resJson;
    } else if (res.status == 400) {
      const resJson = await res.json();
      return resJson;
    }
  }

  async getAllConversion(): Promise<Conversion[]> {

    const res = await fetch(API + "Conversion",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.auth.token
        }
      })
    const resJson = await res.json()
    return resJson
  }

  async getById(id: number): Promise<Conversion[]> {
    const res = await fetch(API + "Conversion/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
    })
    const resJson = await res.json()
    return resJson
  }

  async getRemainingConversions(id: number): Promise<number> {
    const res = await fetch(API + "Conversion/GetRemainingRequest/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
    })
    const resJson = await res.json()
    return resJson
  }
}



