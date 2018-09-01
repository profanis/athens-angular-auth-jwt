import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UserService {
  public username: string;
  public first: string;
  public last: string;
  public id: number;

  constructor() { }

  setUser(username: string, first: string, last: string, id: number) {
    this.username = username;
    this.first = first;
    this.last = last;
    this.id = id;
  }
}
