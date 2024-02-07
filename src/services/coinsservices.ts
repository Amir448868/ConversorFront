import { Injectable } from '@angular/core';
import { API } from 'src/app/constantes/API';
import { ApiService } from './apiservices';
import { Coin } from 'src/app/interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinsServices extends ApiService {



  async create(coin: Coin): Promise<Boolean> {
    const res = await fetch(API + "currency", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(coin)
    })
    return res.ok;
  }

  async delete(id: number): Promise<Boolean> {

    const res = await fetch(API + "currency/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      }
    })
    return res.ok
  }

  async edit(coin: Coin): Promise<Boolean> {
    if (!coin.monedaId) return false;
    const res = await fetch(API + "currency/" +
      coin.monedaId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(coin)
    })
    return res.ok;
  }

  async getAll(): Promise<Coin[]> {
    const res = await fetch(API + "currency",
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
}


