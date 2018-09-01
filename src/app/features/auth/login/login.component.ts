import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserService } from '../../../core/user.service';
import { TokenUtilitiesService } from 'src/app/core/token-utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService,
              private userService: UserService,
              private tokenUtilitiesService: TokenUtilitiesService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username, this.password)
    .subscribe(
      (data: any) => {
        localStorage.setItem("token", data);
        const user: any = this.tokenUtilitiesService.getDecodedToken(data);
        this.userService.setUser(user.username, user.first, user.last, user.id);
      },
      error => {console.log(error),
      () => console.log("is completed")});
  }

}
