import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  constructor(public arout:ActivatedRoute) { }
  patientID;
  ngOnInit() {
    this.patientID=this.arout.snapshot.paramMap.get('id');
    console.log(this.patientID)
  }

}
