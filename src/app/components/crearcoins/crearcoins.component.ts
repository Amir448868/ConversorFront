import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsServices } from 'src/services/coinsservices';
import { Coin } from 'src/app/interfaces/coin';
import { generarMensajeError, generarMensajeExito } from 'src/app/ayudantes/mensajes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crearcoins',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crearcoins.component.html',
  styleUrls: ['./crearcoins.component.css']
})
export class CrearcoinsComponent {

  coinsServices = inject(CoinsServices);

  @Output() cerrar = new EventEmitter();

  coins: Coin = {
    monedaId: 0,
    symbol: '',
    name: '',
    value: 0,
  };

  async crearMoneda() {
    const res = await this.coinsServices.create(this.coins)
    this.cerrar.emit()

    if (res) {
      generarMensajeExito('Moneda creada')
    } else {
      generarMensajeError('No se ha podido crear la moneda')
    }
  }

}
