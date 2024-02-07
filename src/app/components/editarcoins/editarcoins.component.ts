import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsServices } from 'src/services/coinsservices';
import { Coin } from 'src/app/interfaces/coin';
import { generarMensajeError, generarMensajeExito } from 'src/app/ayudantes/mensajes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editarcoins',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editarcoins.component.html',
  styleUrls: ['./editarcoins.component.css']
})
export class EditarcoinsComponent {

  coinServices = inject(CoinsServices);

  @Output() cerrar = new EventEmitter();

  @Input() coins: Coin = {
    monedaId: 0,
    symbol: '',
    name: '',
    value: 0,
  };

  async editarCoin() {
    const res = await this.coinServices.edit(this.coins) //Llamamos al scontacts.service para editar el contacto
    this.cerrar.emit() //Emitimos el evento cerrar
    if (res) { //Si la respuesta es correcta, emitimos el evento cerrar y mostramos un mensaje de exito
      generarMensajeExito('Moneda editada')
    } else { //Si la respuesta es incorrecta, emitimos el evento cerrar y mostramos un mensaje de error
      generarMensajeError('No se ha podido editar la moneda')
    }
  }


}
