import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get("/hotel", {
      headers: {"Authorization": localStorage.getItem("token")}
    });

    // return this.http.get("/hotel");
  }
}
