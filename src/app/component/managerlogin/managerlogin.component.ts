import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.css']
})
export class ManagerloginComponent implements OnInit {

  constructor(@Inject(Http) public http,public router:Router) { }
  username;password;
  ngOnInit() {
  }

  managerLogin(){
    var obj={
      username:this.username,
      password:this.password
    }
    this.http.post('api/managerlogin',obj).subscribe(this.managerLoginCallback)

  }
  managerLoginCallback=(dt)=>{
    var data=JSON.parse(dt._body)
    localStorage.setItem('manager-token',data.token)
    var data=data.data;
    alert('login Successfull')
    this.router.navigate(['managerprofile/',data])
  }
}
