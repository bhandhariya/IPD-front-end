import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section86',
  templateUrl: './section86.component.html',
  styleUrls: ['./section86.component.css']
})
export class Section86Component implements OnInit {

  constructor(public router:Router) { }
  Q1;Q2;Q3;Q4;Q5;temp1;temp2;temp3;
  ngOnInit() {
  }

  section86(){
    this.router.navigate(['home/demo/sections86'])
  }
  section85(){
    this.router.navigate(['home/demo/sections85'])
  }
  section89(){
    this.router.navigate(['home/demo/sections89'])
  }
  section90(){
    this.router.navigate(['home/demo/sections90'])
  }
  admit1(){
    if(this.Q1=="Yes" && this.Q2=="Yes" && this.Q3=="Yes"){
      this.temp1='raja'
    }else{
      this.temp2='raja'
    }
  }
  admit2(){
   if(this.Q4=="Yess"){
    alert('form Submitted')
   }
  }
  admit3(){
    if(this.Q5=="Yess"){
      this.temp3="raja"
    }

  }
  submit(){
    alert('form submitted')
  }

}
