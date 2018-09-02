import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!req.url.endsWith("/login")) {
      const token = localStorage.getItem("token");
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: localStorage.getItem("token")
          }
        });
      }
    }
    return next.handle(req);
  }
}
