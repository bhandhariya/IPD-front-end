import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-billing-summury',
  templateUrl: './a-billing-summury.component.html',
  styleUrls: ['./a-billing-summury.component.css']
})
export class ABillingSummuryComponent implements OnInit {
  ok=132;abhikidate;
  constructor() { }

  ngOnInit() {
    this.ok=0;
    console.log(this.abhikidate)
  }


}
