import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;password;
  constructor(@Inject(Http) public http,public router:Router) { }

  ngOnInit() {
  }
  login(){
    var obj={
      username:this.username,
      password:this.password
    }
    this.http.post('http://localhost:3000/hospital/login',obj).subscribe(this.logCallback)
  }
  logCallback=(dt)=>{
    var data=JSON.parse(dt._body);
    var id=(data.id)
    localStorage.setItem('hospital-id',id);
    localStorage.setItem('hospital-token',data.token);
    alert('login Successfull');
    if(data.token!=null){
      this.router.navigate(['home',{id:id}])
    }
    
  }

}
