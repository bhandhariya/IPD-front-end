import { Component, OnInit, Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(Router) public router,public http:Http,public arout:ActivatedRoute) { }
  hospitalID;PatDetail;i=0;
  ngOnInit() {
    this.hospitalID=this.arout.snapshot.paramMap.get('id')
    this.fetchAllPatients();
        
  }
  newpatient(){
    
  }
  fetchAllPatients(){
   var obj={
     id:this.hospitalID
   }

    this.http.post('http://localhost:3000/patient/getAllPat',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    this.PatDetail=JSON.parse(dt._body);
  }
  profile(x){
    this.router.navigate(['patient-profile',{id:x}]);
  }

  logout(){
    localStorage.removeItem('hospital-token');
    localStorage.removeItem('hospital-id');
    this.router.navigate(['login'])
  }
  hosprofile(){
    this.router.navigate(['profile'])
  }

}
