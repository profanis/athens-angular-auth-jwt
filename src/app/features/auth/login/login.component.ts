import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenUtilitiesService } from 'src/app/core/token-utilities.service';

import { UserService } from '../../../core/user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string;
  password: string;
  loginSubscription: Subscription;
  isAuthenticated: boolean;

  constructor(private loginService: LoginService,
              private userService: UserService,
              private tokenUtilitiesService: TokenUtilitiesService) { }

  ngOnInit() {
    this.userInitialization();
  }

  login() {

    const onSucess = (data) => {
      localStorage.setItem("token", data);
      this.userInitialization();
    }

    const onError = (error) => console.log(error)

    this.loginSubscription = this.loginService.login(this.username, this.password)
    .subscribe(onSucess,onError);
  }

  private userInitialization() {
    const token = localStorage.getItem("token");
    if (token) {
      const user: any = this.tokenUtilitiesService.getDecodedToken(token);
      this.userService.setUser(user.username, user.first, user.last, user.id, user.roles);
      this.isAuthenticated = true;
    }
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

}
