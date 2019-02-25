import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import * as dateFormat  from "dateformat";


@Component({
  selector: 'app-final-billing-page',
  templateUrl: './final-billing-page.component.html',
  styleUrls: ['./final-billing-page.component.css']
})
export class FinalBillingPageComponent implements OnInit {
  name;number;data;saini;raja;pid;hos_id;Services;somevalye;hospiatl_details;patser;detailsosService;patServices
  constructor(@Inject(Http) public http,public router:Router) { }

  ngOnInit() {
    this.hos_id=localStorage.getItem('hospital-id');
    this.gethospitaldetails()
  }
  findbyname(){
    var obj={
      name:this.name
    }
    this.raja='';
    this.saini='';
    this.http.post('http://localhost:3000/patient/findbynameall',obj).subscribe(this.findcb)
  }
  findcb=(dt)=>{
    this.data=JSON.parse(dt._body);
    console.log(this.data)
    // this.getPateintServiceDetails();
  }
  findbynumber(){}
  test1(x){
    this.saini='raja'
    this.data=''
    this.raja=''
    console.log(x)
    var url='/pre-bill'
    var id=x;
    this.router.navigate(['pre-bill',{id:id}])
    
  }
  test(e){
  this.pid=e;
  var obj={
    id:this.hos_id,
    
    
  }
  var obj2={
    id:e
  }
  this.getpatdetails();
  this.data='';
  this.raja='rajkakja'
  this.saini=''
  
  this.http.post('http://localhost:3000/hospital/getallService',obj).subscribe(this.testcb)

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
hoscb=(dt)=>{
  this.hospiatl_details=JSON.parse(dt._body);
  console.log(this.hospiatl_details)
}
hello(){
  console.log(this.somevalye._id)
}
addnewcategories(){
  var serviceid=(this.somevalye._id);
  console.log(serviceid)
  var obj={
    serviceid:this.somevalye._id,
    patientid:this.pid,
    hospitalid:this.hos_id,
  }
 
  this.http.post('http://localhost:3000/patient/addServiceToPatient',obj).subscribe(this.cb2)
}
tottal;dtttt;
cb2=(dt)=>{
  var data=JSON.parse(dt._body);
  console.log(data)
  this.getpatdetails()
  this.patServices=data.services;
  this.dtttt=JSON.parse(dt._body);
  this.tottal=this.dtttt.reduce((sum,item)=> sum+item.charge,0);
  console.log(this.tottal)
  
  }

patdetails
cbbbb=(dt)=>{
var data=JSON.parse(dt._boy);
console.log(data)
}


getpatdetails(){
  var obj={
    id:this.pid
  }
  this.http.post('http://localhost:3000/patient/getonePatientDetail',obj).subscribe(this.sercb)
}
totall;tt;
sercb=(dt)=>{
  this.patser=JSON.parse(dt._body);
  this.tt=(this.patser.BillingDetails)
  this.detailsosService=this.patser.BillingDetails;
  
  
    this.totall=this.tt.reduce((sum,item)=> sum+item.charge,0);
console.log(this.totall)
  }
bill(){

  var obj={
    billids:this.patServices,
    patid:this.pid,
    hos_id:this.hos_id,
    total:this.totall,
    billing_date:dateFormat(new Date(),"yyyy-mm-dd")
  }
  this.http.post('http://localhost:3000/patient/billinggg',obj).subscribe(this.billcb)

}
billigdata;
billcb=(dt)=>{
this.billigdata=JSON.parse(dt._body)
console.log(this.billigdata)
if(this.billigdata){
  alert('billing done')
}
this.getpatdetails()
this.totall=""
}
deleteservicebyid(x){
var obj={
  serviceid:x,
  patid:this.pid
}
this.http.post('http://localhost:3000/patient/deleteservicebyid',obj).subscribe(this.deleteCall)

}
deleteCall=(dt)=>{
  alert(dt._body);
this.getpatdetails();
}

}
