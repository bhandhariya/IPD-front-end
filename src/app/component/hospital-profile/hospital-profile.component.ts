import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.css']
})
export class HospitalProfileComponent implements OnInit {
  hid;hdata;val=123;
  name;email;phone;city;state;pincode;
  constructor(@Inject(Http) public http) { 

  }

  ngOnInit() {
    this.hid=localStorage.getItem('hospital-id');
    this.getHospitalDetails();
  }

  getHospitalDetails(){
    var obj={
      id:this.hid
    }
    this.http.post('http://localhost:3000/hospital/getAlldetails',obj).subscribe(this.hosdetailcb)
  }
  hosdetailcb=(dt)=>{
    this.hdata=JSON.parse(dt._body);
    console.log(this.hdata)
  }
  edithospitalProfile(){
    this.val=0;
  }

}
