import { Component } from '@angular/core';
import { AppConfigService } from '../shared/interceptors/app-config.service';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent {
  request:any;
  data:any;
  progress;picture;name;country;
  isActive:boolean=true;
  
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
        picture: this.picture,
        name: this.name,
        country:this.country,
        progress:this.progress,
      };
      this.mainService
        .getDetail(this.request)
        .subscribe((response: any) => {
          this.data = response.new_users;
         
        });
    }
}
