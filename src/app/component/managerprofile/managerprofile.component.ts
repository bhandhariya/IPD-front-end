import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;  
@Component({
  selector: 'app-managerprofile',
  templateUrl: './managerprofile.component.html',
  styleUrls: ['./managerprofile.component.css']
})
export class ManagerprofileComponent implements OnInit {

  constructor(@Inject(ActivatedRoute) public obj) { }
  data;
  ngOnInit() {
    $(document).ready(function()
    {
      var navItems = $('.admin-menu li > a');
      var navListItems = $('.admin-menu li');
      var allWells = $('.admin-content');
      var allWellsExceptFirst = $('.admin-content:not(:first)');
      allWellsExceptFirst.hide();
      navItems.click(function(e)
      {
          e.preventDefault();
          navListItems.removeClass('active');
          $(this).closest('li').addClass('active');
          allWells.hide();
          var target = $(this).attr('data-target-id');
          $('#' + target).show();
      });
      });
      this.obj.params.subscribe(dt=>{
        this.data=dt;
      })
      


  }

logout(){
  localStorage.removeItem('manager-token');
  alert('you are logeed out')
}


}
