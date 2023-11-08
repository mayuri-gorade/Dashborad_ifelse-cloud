import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';



@Injectable()
export class APIInterceptor implements HttpInterceptor {

// interceptor started here

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('https')) {
      return next.handle(req).pipe(
        map((response: any) => {
          if (response && response.body && response.body.status == 'Failure') {
            // this.toastr.error(response.body.status_msg || 'Something went wrong!', 'Error');
          }
          return response;
        })
      );
    }

    if (!req.url.includes('json')) {
      const clone = req.clone({
        url: `${environment.apiUrl}${req.url}`,
      });

      return next.handle(clone).pipe(

        map((response: any) => {

          if (response && response.body && response.body.status == 'Failure') {

            // this.toastr.error(response.body.status_msg || 'Something went wrong!', 'Error');

          }

          return response;

        })

      );

    }
  }
};


