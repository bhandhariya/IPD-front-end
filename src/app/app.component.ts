import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'http://localhost:3000';
  constructor(@Inject(Http) public http){}
  admin(){
    this.http.get(this.url,'/users').subscribe(dt=>{
      alert(dt._body)
    })
  }
  


}
