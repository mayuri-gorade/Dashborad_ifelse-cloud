import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MainService } from '../main.service';
import { AppConfigService } from '../shared/interceptors/app-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  public displayedColumns = [
    "sr",
    "id",
    "name",
    "product",
    "delivery_date",
    "status",
    "tracking_no",
    "shipping",
    "delete",
  ];
  data: any = [];
  id:any;
  name:string;
  product:any;
  delivery_date:any;
  status:any;
  tracking_no:any;
  shipping:any;
  request:any;
  dataSource:[];
  constructor(
    private mainService: MainService,
    private router: Router,
    private configs: AppConfigService,
  
    ){
  }

  ngOnInit(): void {
      this.getALLData();
  }
     getALLData() {
      this.request= {
        id: this.id,
        name: this.name,
        product: this.product,
        delivery_date: this.delivery_date,
        status: this.status,
        tracking_no: this.tracking_no,
        shipping: this.shipping,

      };
  
      this.mainService
        .getDetail(this.request)
        .subscribe((response: any) => {
          this.data = response.recent_orders;
         console.log(this.data);
        this.dataSource = this.data;

        });
    }
}
