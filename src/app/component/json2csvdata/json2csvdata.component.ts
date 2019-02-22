import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import * as jsonexport from "jsonexport/dist"
import * as saveAs from "file-saver";
import * as Json2csvParser from 'json2csv';
import { t } from '@angular/core/src/render3';


@Component({
  selector: 'app-json2csvdata',
  templateUrl: './json2csvdata.component.html',
  styleUrls: ['./json2csvdata.component.css']
})
export class Json2csvdataComponent implements OnInit {

  constructor(@Inject(Http) public http) { }

  ngOnInit() {
  }

  saveToFileSystem(response) {
   
    const filename = 'csvvvv.csv';
    const blob = new Blob([response], { type: 'text/json' });
    saveAs(blob, filename);
  }
  
  fire(){
    this.http.post('http://localhost:4000/api/patients/jsondata').subscribe(this.cb)
  }
  cb=(dt)=>{
    var data=JSON.parse(dt._body);
    saveAs(new Blob([data],{type:'text/json'}),'texxt.csv')
 
    // jsonexport(data.body,function(err,csv){
    //   if(err){
    //     alert('')
    //   }else{
    //   saveAs(new Blob([csv],{type:'text/json'}),'texxt.csv')
        
    //   }
    // })
    
    
    
    
  }
  jsontocsvv(){
    jsonexport(this.jsondata,function(err,csv){
      if(err){
        console.log('err')
      }else{
        saveAs(new Blob([csv],{type:'text/json'}),'datdaata.csv')

      }
    })
  }
  shoedata(){
      console.log(this.jsondata)
  }

  jsondata;
  
savecsvv(){
    

      console.log(this.jsondata)
      jsonexport(this.jsondata, {fillGaps: true  }, function(err, csv){
        if(err) return console.log(err);
        saveAs(new Blob([csv],{type:'text/json'}),'nine-feb.csv')
    });

}

savetocsv(){
    this.http.post('http://localhost:4000/api/patients/check').subscribe(this.cbbbbbbb)

    
  
}
cbbbbbbb=(dt)=>{
     var dat=JSON.parse(dt._body);
    
    jsonexport(dat.body, {fillGaps: true   }, function(err, csv){
        if(err) return console.log(err);
        saveAs(new Blob([csv],{type:'text/json'}),'nine-feb.csv')
    });
  }

  final(){
    this.http.post('http://localhost:4000/api/appointments/finDoctorName').subscribe(this.finale) 
  }
  finale=(dt)=>{
    var dat=JSON.parse(dt._body); 
    jsonexport(dat.body, function(err, csv){
        if(err) return console.log(err);
        saveAs(new Blob([csv],{type:'text/json'}),'finalData.csv')
    });
  }





    }

