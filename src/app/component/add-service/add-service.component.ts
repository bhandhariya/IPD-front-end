import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  name;charge;Services;i=0;
  a=localStorage.getItem('hospital-id');
  constructor(@Inject(Http) public http) { }

  ngOnInit() {
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    this.fetchAllPatients()
  }

  create(){
    var a=localStorage.getItem('hospital_id');
    var obj={
      name:this.name,
      charge:this.charge,
      hospital_id:this.a
    }
    this.http.post('http://localhost:3000/service/createService',obj).subscribe(this.cb);
  }
  cb=(dt)=>{
    alert(dt._body);
    window.location.reload();
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
   delete(x){
     var obj={
       id:x
     }
     this.http.post('http://localhost:3000/service/deletebyid',obj).subscribe(this.cb)
   }


}
