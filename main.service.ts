import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
// import { URI_ATTRS } from '@angular/core/src/sanitization/html_sanitizer';
import { environment } from 'src/environments/environment';
import { AppConfigService } from './shared/interceptors/app-config.service';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  urlConfig: any;apiUrl: any;api_balicuat1: any;api_balic_uat: any
  isDisabled: any = new BehaviorSubject<any>(true);
  constructor(private httpClient: HttpClient,private config: AppConfigService) {
    this.apiUrl = environment.apiUrl;
   }
  getDetail(payload:any){
    return this.httpClient.post<any>(`${this.apiUrl}`, payload)
  }
}
