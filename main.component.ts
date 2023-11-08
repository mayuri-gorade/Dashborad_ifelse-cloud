import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfigService } from '../shared/interceptors/app-config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  activeGrid: number = 0; // Define activeGrid property
  requestPersonal1:any;
req:any;headerValue;sub_headerValue;Value;
headerValue1;sub_headerValue1;Value1;
headerValue2;sub_headerValue2;Value2;
headerValue3;sub_headerValue3;Value3;
header:any;
sub_header:any;
value:any;
constructor(
  private mainService: MainService,
  private router: Router,
  private configs: AppConfigService,

  ){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
    this.getALLDetail();
}
   getALLDetail() {
    this.requestPersonal1 = {
      header: this.header,
      sub_header: this.sub_header,
      value: this.value,
    };

    this.mainService
      .getDetail(this.requestPersonal1)
      .subscribe((response: any) => {
    this.headerValue = response.top_cards[0].header;
    this.sub_headerValue = response.top_cards[0].sub_header;
    this.Value = response.top_cards[0].value;
    this.headerValue1 = response.top_cards[1].header;
    this.sub_headerValue1 = response.top_cards[1].sub_header;
    this.Value1 = response.top_cards[1].value;
    this.headerValue2 = response.top_cards[2].header;
    this.sub_headerValue2 = response.top_cards[2].sub_header;
    this.Value2 = response.top_cards[2].value;
    this.headerValue3= response.top_cards[3].header;
    this.sub_headerValue3 = response.top_cards[3].sub_header;
    this.Value3 = response.top_cards[3].value;


      });
  }

}
