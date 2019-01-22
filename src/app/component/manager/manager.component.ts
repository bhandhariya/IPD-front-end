import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  name;email;password;status;username;AllManager;j=0;
  constructor(@Inject(Http) public http,
  public router:Router) { 
    this.getManager();
  }

  ngOnInit() {
    this.getManager();
  }
  saveManager(){
    var obj={
      name:this.name,
      email:this.email,
      password:this.password,
      status:this.status,
      username:this.username
    }
    this.http.post('api/managerRegister',obj).subscribe(this.callback)
    
  }
  callback=(dt)=>{
    alert(dt._body);
    this.getManager();
  }
  getManager(){
    this.http.get('api/getAllManager').subscribe(this.getAllManagerCallback)
  }
  getAllManagerCallback=(dt)=>{
this.AllManager=JSON.parse(dt._body)
  }
  deleteManager(x){
    var data={_id:x}
    this.http.post('api/deleteManager',data).subscribe(this.deleteManagerCallback)
  }
  deleteManagerCallback=(dt)=>{
    alert(dt._body)
    this.getManager();
  }
  globid="";
  editManager(x){
    this.globid=x._id;
    alert(this.globid)
    
    
  }
  back(){
    this.router.navigate(['dashboard'])
  }
  

  
}
