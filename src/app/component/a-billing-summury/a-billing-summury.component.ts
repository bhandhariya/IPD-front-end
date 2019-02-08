import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-a-billing-summury',
  templateUrl: './a-billing-summury.component.html',
  styleUrls: ['./a-billing-summury.component.css']
})
export class ABillingSummuryComponent implements OnInit {
  ok=132;abhikidate;
  constructor(private toastr:ToastrService) { }

  ngOnInit() {
    this.ok=0;
    console.log(this.abhikidate)
  }


}
