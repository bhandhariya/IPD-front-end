import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-a-add-service',
  templateUrl: './a-add-service.component.html',
  styleUrls: ['./a-add-service.component.css']
})
export class AAddServiceComponent implements OnInit {

  constructor(@Inject(Http) public http,public arour:Router,public toastr:ToastrService) { }
  Services;a;name;charge;Alldetails={};
  ngOnInit() {
    this.a=localStorage.getItem('hospital-id');
    this.fetchAllPatients();
    this.getHospitalDetails();
  }
  test(){
    alert('raja ')
  }
  fetchAllPatients(){
    var obj={
      id:this.a
    }
 
     this.http.post('http://localhost:3000/service/findall',obj).subscribe(this.cb2)
  }
  cb2=(dt)=>{
    this.Services=JSON.parse(dt._body);
  }
  create(){
    var a=localStorage.getItem('hospital_id');
    var obj={
      name:this.name,
      charge:this.charge,
      hospital_id:this.a
    }
    this.http.post('http://localhost:3000/service/createService',obj).subscribe(this.cb);
    this.toastr.success("Service Addedd Successfully","Success");
  }
  cb=(dt)=>{
   // alert(dt._body);
    this.fetchAllPatients();
    window.location.reload();
  }
  bgloid=0;serviceName;price
  tab(x){
    this.bgloid=x._id;
    this.serviceName=x.name;
    this.price=x.charge
    
  }
  saveSer(){
    var obj={
      id:this.bgloid,
      name:this.serviceName,
      charge:this.price
    }
    this.http.post('http://localhost:3000/service/update',obj).subscribe(this.un)
    this.toastr.success('Service Edited Successfully','Success');
  }
  un=(dt)=>{
    //alert(dt._body);
    this.fetchAllPatients();
    this.bgloid=0;
  }
  delete(x){
    var obj={
      id:x
    }
    this.http.post('http://localhost:3000/service/deletebyid',obj).subscribe(this.dlcb)
    this.toastr.error('Service Deleted Successfully','Success');
  }
  dlcb=(dt)=>{
    //alert(dt._body);
    this.fetchAllPatients();
  }

  getHospitalDetails(){
    var obj={
      id:this.a
    }
    this.http.post('http://localhost:3000/hospital/getAlldetails',obj).subscribe(this.hoscall)
  }
  hoscall=(dt)=>{
    this.Alldetails=JSON.parse(dt._body);
  }
  gotobilling(){
    this.arour.navigateByUrl('home/a-billing')
  }

}
