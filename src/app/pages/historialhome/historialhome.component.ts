import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Conversion } from 'src/app/interfaces/conversion';
import { AuthService } from 'src/services/authservices';
import { ConversionServices } from 'src/services/conversionservices';

@Component({
  selector: 'app-historialhome',
  templateUrl: './historialhome.component.html',
  styleUrls: ['./historialhome.component.css']
})
export class HistorialhomeComponent implements OnInit {

  authServices = inject(AuthService);
  conversionServices = inject(ConversionServices);

  @Input() conversions: Conversion[] = [];




  ngOnInit(): void {

    const userid = this.authServices.userid;

    this.conversionServices.getById(userid).then(conversions => {
      this.conversions = conversions
    });
  }

}
