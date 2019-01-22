import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ManagerCount;
  constructor(@Inject(Http) public http) {
    this.getAllManagerCount();
   }

  ngOnInit() {
    var token=localStorage.getItem('token');
    console.log(token)
    this.getAllManagerCount()
  }

  getAllManagerCount(){
    this.http.get('api/getManagerCount').subscribe(this.getAllManagerCountCallback)
  }
  getAllManagerCountCallback=(dt)=>{
      var ManagerCount=JSON.parse(dt._body)
      this.ManagerCount=ManagerCount.data;
  }
  logout(){
    localStorage.removeItem('admin-token')
  }

}
