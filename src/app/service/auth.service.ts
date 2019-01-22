import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  adminLoggedIn(){
    return !!localStorage.getItem('hospital-token');
  }

  managerLoggedIn(){
    return !!localStorage.getItem('manager-token');
  }

}
