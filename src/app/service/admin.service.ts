import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:Http) { }
  adminLogin(obj){
    return this.http.post('http://localhost:3000/hospital/login',obj)
  }


}
