import { Component, OnInit, Inject } from '@angular/core';
import {  Router, Route } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(public router:Router) { }
  Q1;Q11;
  Q2;
  ngOnInit() {
  }
  q1(){
    if(this.Q1=="Yes"){
      this.Q11='start';
    }
  }
  q2(){
    alert('form Submiteed')
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

}
