import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section90',
  templateUrl: './section90.component.html',
  styleUrls: ['./section90.component.css']
})
export class Section90Component implements OnInit {

  constructor(public router:Router) { }
Q1;Q2;Q3;Q4;Q5;temp1;
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
    if(this.Q1=="Yes" && this.Q2=="Yes" && this.Q3=="Yes" ){
      this.temp1='raja'
    }
  }
  admit2(){
    alert('unknown')
  }

}
