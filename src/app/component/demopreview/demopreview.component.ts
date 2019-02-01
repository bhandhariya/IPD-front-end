import { Component, OnInit,NgModule } from '@angular/core';
import {MatButtonModule,MatCheckboxModule,MatMenuModule, MatDialogModule,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatMenuModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule,MatMenuModule,MatDialogModule]
})
export class DemopreviewModule{}


@Component({
  selector: 'app-demopreview',
  templateUrl: './demopreview.component.html',
  styleUrls: ['./demopreview.component.css']
})
export class DemopreviewComponent implements OnInit {
raj='raja'
  constructor(public dialog: MatDialog) { }
  

  ngOnInit() {
  }
  openDialog(){
    const dialogRef =this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}





@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}