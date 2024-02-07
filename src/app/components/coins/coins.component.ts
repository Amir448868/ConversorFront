import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsServices } from 'src/services/coinsservices';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from 'src/app/interfaces/coin';
import Swal from 'sweetalert2';
import { EditarcoinsComponent } from "../editarcoins/editarcoins.component";

@Component({
  selector: 'app-coins',
  standalone: true,
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
  imports: [CommonModule, EditarcoinsComponent]
})
export class CoinsComponent {

  coinsServices = inject(CoinsServices);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  @Input({ required: true }) coins !: Coin;

  BorrarMoneda() {

    Swal.fire({
      title: 'Queres eliminar la moneda ' + this.coins.symbol,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.coinsServices.delete(this.coins.monedaId).then(res => {

          if (res) {
            Swal.fire(
              'Eliminado!',
              'La moneda ' + this.coins.symbol + ' fue eliminada correctamente',
              'success'
            );
            this.router.navigate(['/crudcoins']);
          } else {
            Swal.fire(
              'Error!',
              'La moneda ' + this.coins.symbol + ' no pudo ser eliminada',
              'error'
            )
          }
        });

      }
    })
  };




}
