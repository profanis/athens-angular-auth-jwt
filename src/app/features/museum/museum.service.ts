import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MuseumService {

  constructor(private http: HttpClient) { }

  getMuseums() {
    return this.http.get("/museum", {
      headers: {"token": localStorage.getItem("token")}
    });
  }
}
