import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(username, password) {
    return this.http.post("/login", {username, password});
  }

}
