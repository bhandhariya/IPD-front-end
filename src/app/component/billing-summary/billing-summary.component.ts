import { Component, OnInit,Inject} from '@angular/core';
import { Http, JsonpModule } from '@angular/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-billing-summary',
  templateUrl: './billing-summary.component.html',
  styleUrls: ['./billing-summary.component.css']
})
export class BillingSummaryComponent implements OnInit {


 //date=Date.now();id;Alldetails={};selectDate:Date;
 // date = new Date().toISOString().substr(0, 10);myDate:Date;
 //planModel: any = {start_time: new Date() };
 planModel={start_time:new Date()};
 id;Alldetails={};selectDate:Date;
  constructor(@Inject(Http) public http) { }
    ngOnInit() {
    this.id=localStorage.getItem('hospital-id');
    this.getHospitalDetails();
    console.log(this.planModel.start_time)
  }
  downloadAsExcel(){
  
    
  }
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys: [ 'billing_date']
  };


  getHospitalDetails(){
    var obj={
      id:this.id
    }
    this.http.post('http://localhost:3000/hospital/getAlldetails',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    this.Alldetails=JSON.parse(dt._body);
    console.log(this.Alldetails)
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
  gettodayDayBilling(){
    var obj={
      billing_date:this.planModel.start_time
      
    }
    alert('raja')
    this.http.post('http://localhost:3000/billing/billingAtDayEnd',obj).subscribe(this.cb2);
  }

}
