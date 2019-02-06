import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import{ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  id;Alldetails;allPatDetails={};c1:string;noname;
  constructor(@Inject(Http) public http,private toastr:ToastrService) { }

  ngOnInit() {
    this.id=localStorage.getItem('hospital-id');
    this.getHospitalDetails();
    this.getPatientDetails();
    this.getAllServices();
    
  }
  
  getHospitalDetails(){
    var obj={
      id:this.id
    }
    this.http.post('http://localhost:3000/hospital/getAlldetails',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    this.Alldetails=JSON.parse(dt._body);
    this.getPateintServiceDetails();
    
  }

  getPatientDetails(){
    var obj={
      id:this.id
    }
    this.http.post('http://localhost:3000/patient/getAllPat',obj).subscribe(this.patcb)
  }
  patcb=(dt)=>{
    this.allPatDetails=JSON.parse(dt._body)
  
  }
  getScat(){
    // var obj={
    //   id:this.c1
    // }
    // this.http.post('http://localhost:3000/patient/getonePatientDetail',obj).subscribe(this.cb3)
    this.getPateintServiceDetails();
  }
  pat;
  cb3=(dt)=>{
    this.pat=JSON.parse(dt._body);
    console.log(this.pat)
  }
  getAllServices(){
    var obj={
      id:this.id
    }
    this.http.post('http://localhost:3000/service/findall',obj).subscribe(this.cb4)
  }
  service;
  cb4=(dt)=>{
    this.service=JSON.parse(dt._body)
    console.log(this.service)
  }
  addServiceToPatient(x){
    var obj={
      pat_id:this.c1,
      service_id:x,
      hos_id:this.Alldetails.id
    }
    // console.log(obj.pat_id)
    // console.log(obj.service_id)
    // console.log(obj.hos_id)
    this.http.post('http://localhost:3000/patient/addService',obj).subscribe(this.cb5)
    this.toastr.success("Patient's Service Addedd Successfully","Success");
  }
  cb5=(dt)=>{
    alert(dt._body)
    this.getPateintServiceDetails();
  }
  getPateintServiceDetails(){
    var obj={
      id:this.c1,
      
    }
    this.http.post('http://localhost:3000/patient/allServiceDetails',obj).subscribe(this.cb6)
  }
  totolserviceAmount;
  cb6=(dt)=>{
    this.noname=(JSON.parse(dt._body))
      this.totolserviceAmount=this.noname.reduce((sum,item)=> sum+item.charge,0);
      
  }
  deleteserviceFromPatient(x){
    var obj={
      id:x

    }
    alert('delete not prepared')
  }
  
  billing(){
    var obj={
      aa:"raja",
      pat_id:this.c1,
      total:this.totolserviceAmount
    }
    this.http.post('http://localhost:3000/billing/billforPatientt',obj).subscribe(this.cbb)
  }
  cbb=(dt)=>{
    alert(dt._body)
  }

  
}
