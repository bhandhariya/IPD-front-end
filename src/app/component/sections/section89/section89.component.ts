import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section89',
  templateUrl: './section89.component.html',
  styleUrls: ['./section89.component.css']
})
export class Section89Component implements OnInit {

  constructor(public router:Router) { }
Q1;Q2;Q3;Q4;temp1
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
    if(this.Q1!="Yes" || this.Q2!="Yes" || this.Q3!="Yes" ){
      this.temp1='raja'
    }
  }
  admit2(){
    if(this.Q4=="Yess"){
      alert('form Submiteed')
    }
  }

}
