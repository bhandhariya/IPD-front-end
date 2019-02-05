import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-a-billing',
  templateUrl: './a-billing.component.html',
  styleUrls: ['./a-billing.component.css']
})
export class ABillingComponent implements OnInit {
  name;number;data;hos_id;Services;pid;
  constructor(@Inject(Http) public http) { }
test(e){
  this.pid=e;
  var obj={
    id:this.hos_id,
    
  }
  this.getpatdetails();
  this.getPateintServiceDetails();
  
  this.http.post('http://localhost:3000/hospital/getallService',obj).subscribe(this.testcb)
}
getpatdetails(){
  var obj={
    id:this.pid
  }
  this.http.post('http://localhost:3000/patient/getonePatientDetail',obj).subscribe(this.sercb)
}
patser;
sercb=(dt)=>{
  this.patser=JSON.parse(dt._body);
  console.log(this.patser)
}
testcb=(dt)=>{
  this.Services=JSON.parse(dt._body);
  console.log(this.Services)
}
gethospitaldetails(){
  var obj={
    id:this.hos_id
    
  }
  this.http.post('http://localhost:3000/hospital/getAlldetails',obj).subscribe(this.hoscb)
}
hospiatl_details;
hoscb=(dt)=>{
  this.hospiatl_details=JSON.parse(dt._body);
  console.log(this.hospiatl_details)
}
  ngOnInit() {
    this.hos_id=localStorage.getItem('hospital-id');
    this.gethospitaldetails()
  }
  findbyname(){
    var obj={
      name:this.name
    }
    this.http.post('http://localhost:3000/patient/findbynameall',obj).subscribe(this.findcb)
  }
  findcb=(dt)=>{
    this.data=JSON.parse(dt._body);
    console.log(this.data)
    this.getPateintServiceDetails();
  }
  findbynumber(){
    var obj={
      number:this.number
    }
    this.http.post('http://localhost:3000/patient/findbynumberall',obj).subscribe(this.findcb)
  }
  getPateintServiceDetails(){
    var obj={
      id:this.pid,
      
    }

    this.http.post('http://localhost:3000/patient/allServiceDetails',obj).subscribe(this.cb6)
  }
  totolserviceAmount;
  servicedetailsall
  cb6=(dt)=>{
    this.servicedetailsall=(JSON.parse(dt._body))
      this.totolserviceAmount=this.servicedetailsall.reduce((sum,item)=> sum+item.charge,0);
      console.log(this.totolserviceAmount)
      console.log(this.servicedetailsall)
  }
  addServiceToPatient(x){
    var obj={
      pat_id:this.pid,
      service_id:x,
      hos_id:this.hos_id
    }
    // console.log(obj.pat_id)
    // console.log(obj.service_id)
    // console.log(obj.hos_id)
    this.http.post('http://localhost:3000/patient/addService',obj).subscribe(this.cb5)
  }
  addser=0;
  cb5=(dt)=>{
    alert(dt._body)
    this.addser=0;
    this.getPateintServiceDetails();
  }
  billing(){
    var obj={
      pat_id:this.pid,
      total:this.totolserviceAmount
    }
    this.http.post('http://localhost:3000/billing/billforPatientt',obj).subscribe(this.cbb)
  }
  cbb=(dt)=>{
    alert(dt._body)
  }

}
