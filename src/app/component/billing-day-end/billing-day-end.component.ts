import { Component, OnInit, Inject } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';

@Component({
  selector: 'app-billing-day-end',
  templateUrl: './billing-day-end.component.html',
  styleUrls: ['./billing-day-end.component.css']
})
export class BillingDayEndComponent implements OnInit {
  date=Date.now();id;Alldetails;selectDate;
  constructor(@Inject(Http) public http) { }
  ngOnInit() {
    this.id=localStorage.getItem('hospital-id');
    this.getHospitalDetails();
  }
  getHospitalDetails(){
    var obj={
      id:this.id
    }
    this.http.post('http://localhost:3000/hospital/getAlldetails',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    this.Alldetails=JSON.parse(dt._body);
  }
  getDayBilling(){
    var obj={
      billing_date:this.selectDate
      
    }
    
    this.http.post('http://localhost:3000/billing/billingAtDayEnd',obj).subscribe(this.cb2);
  }
  dayendData;totolserviceAmount;
  cb2=(dt)=>{
    this.dayendData=JSON.parse(dt._body);
    console.log(this.dayendData);
    this.totolserviceAmount=this.dayendData.reduce((sum,item)=> sum+item.total,0);
  }

}
