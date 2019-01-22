import { Component, OnInit,ViewEncapsulation, Inject } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-quick-patient',
  templateUrl: './quick-patient.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./quick-patient.component.css',
  
]
})
export class QuickPatientComponent implements OnInit {

  public show:boolean=false;
  public buttonName:any='Show';
  closeResult: string;
  first_name;primary_contact_number;last_name;secondary_contact_number;gender;email;date_of_birth;
  adhar_number;present_address;permanent_address;marrital_status;parent_name;education;
  url="http://localhost:3000/patient"

constructor(@Inject(Http) public http,private modalService: NgbModal) {}
  openLg(content) {
  this.modalService.open(content, { size: 'lg' });
}
ngOnInit() {  

  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
     { this.buttonName = "ViewLess";}
    else
     { this.buttonName = "ViewMore";}
      


      
  }
save(){
  var obj={
    first_name:this.first_name,
    primary_contact_number:this.primary_contact_number,
    last_name:this.last_name,
    secondary_contact_number:this.secondary_contact_number,
    gender:this.gender,
    email:this.email,
    date_of_birth:this.date_of_birth,
    adhar_number:this.adhar_number,
    present_address:this.present_address,
    permanent_address:this.permanent_address,
    hospital_id:localStorage.getItem('hospital-id')

  }
  this.http.post(this.url+'/addPatient',obj).subscribe(dt=>{
    alert(dt._body)
    window.location.reload();  
    
  })
  


}
  
}
