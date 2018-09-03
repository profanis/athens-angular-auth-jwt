import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor (private router: Router,
              private userService: UserService,
              private toastr: ToastrService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const isAdmin = this.userService.roles.includes("admin");

      if(!isAdmin) {
        this.toastr.warning("You are not authorized to access this page");
        this.router.navigate(["/auth"]);
      }

    return isAdmin;

  }
}
