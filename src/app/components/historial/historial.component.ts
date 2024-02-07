import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionServices } from 'src/services/conversionservices';
import { Conversion } from 'src/app/interfaces/conversion';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

  conversionServices = inject(ConversionServices);

  @Input({ required: true }) conversions !: Conversion;
}
