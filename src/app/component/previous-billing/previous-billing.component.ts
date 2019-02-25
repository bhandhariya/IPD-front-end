import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previous-billing',
  templateUrl: './previous-billing.component.html',
  styleUrls: ['./previous-billing.component.css']
})
export class PreviousBillingComponent implements OnInit {

  constructor(@Inject(Http) public http,public arout:ActivatedRoute) { }
  pid;
  ngOnInit() {
    var data=this.arout.snapshot.paramMap.get('id')
    console.log(data)
    this.pid=data;
    this.getAllbilling();
    console.log(this.pid)
    this.getpatdetails();
  } 
  getpatdetails(){
    var obj={
      id:this.pid
    }
    this.http.post('http://localhost:3000/patient/getonePatientDetail',obj).subscribe(this.cb2)
  }
  patData;
  cb2=(dt)=>{
this.patData=JSON.parse(dt._body)
console.log(this.patData)
  }
  getAllbilling(){
    var obj={
      id:this.pid
    }
    this.http.post('http://localhost:3000/billing/getAllbilling',obj).subscribe(this.cb)
  }
  billdata;totolserviceAmount
  cb=(dt)=>{
this.billdata=JSON.parse(dt._body)
console.log(this.billdata);
this.totolserviceAmount=this.billdata.reduce((sum,item)=> sum+item.total,0);
console.log(this.totolserviceAmount)

  }

}
