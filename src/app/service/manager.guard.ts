import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(public auth:AuthService,public router:Router){}
  canActivate():boolean {
    if(this.auth.managerLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
    }
  }
}
