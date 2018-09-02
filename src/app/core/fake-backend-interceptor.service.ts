import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";

/**
 * The jwt has been generated by:
 * https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlByb2ZhbmlzIiwiZmlyc3QiOiJmYW5pcyIsImxhc3QiOiJwcm9kcm9tb3UiLCJpZCI6MTIzNDU2Nzg5MH0.kapCeAT7ad4qti9zmIIypkKCmFCZJsB_wnEOQS0_Lo4
 */

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private readonly TOKEN_KEY = "token";


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(() => {
        if (req.url.endsWith("/login") && req.method === "POST") {
          return this.authenticatePost(req);
        }

        if (req.url.endsWith("/hotel") && req.method === "GET") {
          return of(req).pipe(
            concatMap(this.authValidation.bind(this)),
            concatMap(this.hotelsGet.bind(this))
          );
        }

        if (req.url.endsWith("/museum") && req.method === "GET") {
          return of(req).pipe(
            concatMap(this.authValidation.bind(this)),
            concatMap(this.museumsGet.bind(this))
          );
        }

        return next.handle(req);
      })
    )
  }

  private authenticatePost(req: HttpRequest<any>) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlByb2ZhbmlzIiwiZmlyc3QiOiJmYW5pcyIsImxhc3QiOiJwcm9kcm9tb3UiLCJpZCI6MTIzNDU2Nzg5MH0.kapCeAT7ad4qti9zmIIypkKCmFCZJsB_wnEOQS0_Lo4";
    if (req.body.username === "profanis" && req.body.password === "profanis") {
      return of(new HttpResponse({ status: 200, body: token }));
    } else {
      return throwError("Username or password is incorrect");
    }
  }

  private hotelsGet(req: HttpRequest<any>): Observable<any> {

    const hotels = [
      {name: "Hilton", stars: 5},
      {name: "Amalia hotel", stars: 4}
    ]
    return of(new HttpResponse({status: 200, body: hotels}));
  }

  private museumsGet(req: HttpRequest<any>): Observable<any> {

    const museums = [
      {name: "Akropoli"},
      {name: "Archaiologiko"}
    ]
    return of(new HttpResponse({status: 200, body: museums}));
  }

  private authValidation(req: HttpRequest<any>) {
    const token = req.headers.get(this.TOKEN_KEY);
    if (!token) {
      return throwError("Invalid token")
    }
    return of(req);
  }

}
