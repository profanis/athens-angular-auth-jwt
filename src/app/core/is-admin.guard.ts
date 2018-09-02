import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor (private router: Router, private userService: UserService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const isAdmin = this.userService.roles.includes("admin");

      if(!isAdmin) {
        this.router.navigate(["/auth"]);
      }

    return isAdmin;

  }
}
