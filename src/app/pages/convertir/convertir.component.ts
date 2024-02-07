import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generarMensajeError, generarMensajeExito } from 'src/app/ayudantes/mensajes';
import { Coin } from 'src/app/interfaces/coin';
import { Conversion, ConversionCreate } from 'src/app/interfaces/conversion';
import { User, UserForUpdate } from 'src/app/interfaces/user';
import { AuthService } from 'src/services/authservices';
import { CoinsServices } from 'src/services/coinsservices';
import { ConversionServices } from 'src/services/conversionservices';

@Component({
  selector: 'app-convertir',
  templateUrl: './convertir.component.html',
  styleUrls: ['./convertir.component.css']
})
export class ConvertirComponent implements OnInit {

  conversionServices = inject(ConversionServices);
  authServices = inject(AuthService);
  coinsServices = inject(CoinsServices);

  router = inject(Router);
  userid = this.authServices.userid;
  isadmin = this.authServices.roleUser === "Admin";
  conversionesRestantes: number = 0;





  users: User = {
    userId: 0,
    userName: '',
    typeUser: '',
    conversionCounter: 0,
    roleid: 0
  }


  conversion: ConversionCreate = {
    fromCurrency: '',
    toCurrency: '',
    amount: 0,
    UserId: this.userid,
    result: 0,
  };

  coins: Coin[] = [];

  async ngOnInit() {
    this.coinsServices.getAll().then(coins => {
      this.coins = coins;
    });



    this.conversionServices.getRemainingConversions(this.userid)
      .then((resRemaining: number) => {
        this.conversionesRestantes = resRemaining;
      })

  }


  async crearConversion() {
    const res = await this.conversionServices.convertir(this.conversion)
    if (res.status == 400) {
      generarMensajeError("No se ha podido crear la conversion")
    }
    else if (res.mensaje) {
      generarMensajeError(res.mensaje)
    }
    else {
      generarMensajeExito('Conversion creada')
      this.conversion.result = res.result
      this.conversionesRestantes = this.conversionesRestantes - 1;
    }
  };


  logout() {
    this.authServices.logOut();
    this.router.navigate(['/login']);
  }


}




