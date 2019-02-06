import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.css']
})
export class HospitalProfileComponent implements OnInit {
  hid;hdata;val=123;
  name;email;phone;city;state;pincode;registration_number;address
  constructor(@Inject(Http) public http) { 

  }
  saveedit(){
    var obj={
      name:this.name,
      email:this.email,
      phone:this.phone,
      city:this.city,
      state:this.state,
      pincode:this.pincode,
      registration_number:this.registration_number,
      address:this.address,


    }
    alert(obj.name)
    this.http.post('http://localhost:3000/hospital/edit',obj).subscribe(this.um)

}
um=(dt)=>{
  alert(dt._body);
  this.val=123;
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
