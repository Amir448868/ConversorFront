import { Component, OnInit, inject } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin';
import { CoinsServices } from 'src/services/coinsservices';
import { UserService } from 'src/services/userservices';

@Component({
  selector: 'app-crudcoins',
  templateUrl: './crudcoins.component.html',
  styleUrls: ['./crudcoins.component.css']
})
export class CrudcoinsComponent implements OnInit {


  coinsServices = inject(CoinsServices);
  coins: Coin[] = [];


  ngOnInit(): void {
    this.coinsServices.getAll().then(coins => {
      this.coins = coins
    });
  }

}
