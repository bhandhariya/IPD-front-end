import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
  username;name;password;
  ngOnInit() {
    
  }
  registeration(){
    var obj={
      username:this.username,
      name:this.name,
      password:this.password
    }
    this.http.post('http://localhost:3000/hospital/register',obj).subscribe(dt=>alert(dt._body))
  }

}
