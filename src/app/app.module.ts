import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPrintModule } from "ngx-print";
import { MatButtonModule,MatCheckboxModule, MatMenuModule, MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { Angular2CsvModule } from 'angular2-csv';

import { AppComponent } from './app.component';

import { HomeComponent } from "./component/home/home.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";

import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';
import { AdminService } from './service/admin.service';
import { ManagerGuard } from "./service/manager.guard";
import { QuickPatientComponent } from './component/quick-patient/quick-patient.component';
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { FormCComponent } from './component/form-c/form-c.component';
import { FormDComponent } from './component/form-d/form-d.component';
import { FormEComponent } from './component/form-e/form-e.component';
import { FormFComponent } from './component/form-f/form-f.component';
import { FormGComponent } from './component/form-g/form-g.component';
import { FormHComponent } from './component/form-h/form-h.component';
import { Form10Component } from './component/form10/form10.component';
import { ProfileScreenComponent } from './component/profile-screen/profile-screen.component';
import { NurseInstructionScreenComponent } from './component/nurse-instruction-screen/nurse-instruction-screen.component';
import { UnitCreationScreenComponent } from './component/unit-creation-screen/unit-creation-screen.component';
import { AddServiceComponent } from './component/add-service/add-service.component';
import { BillingComponent } from './component/billing/billing.component';
import { BillingDayEndComponent } from './component/billing-day-end/billing-day-end.component';
import { PatientProfileComponent } from './component/patient-profile/patient-profile.component';
import { DemopreviewComponent, DialogContentExampleDialog } from './component/demopreview/demopreview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AAddServiceComponent } from './component/a-add-service/a-add-service.component';
import { ABillingComponent } from './component/a-billing/a-billing.component';
import { ABillingSummuryComponent } from './component/a-billing-summury/a-billing-summury.component';
import {MatChipsModule} from '@angular/material/chips';
import { HospitalProfileComponent } from './component/hospital-profile/hospital-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    QuickPatientComponent,
    LoginComponent,
    RegisterComponent,
    FormCComponent,
    FormDComponent,
    FormEComponent,
    FormFComponent,
    FormGComponent,
    FormHComponent,
    Form10Component,
    ProfileScreenComponent,
    NurseInstructionScreenComponent,
    UnitCreationScreenComponent,
    AddServiceComponent,
    BillingComponent,
    BillingDayEndComponent,
    PatientProfileComponent,
    DemopreviewComponent,
    DialogContentExampleDialog,
    AAddServiceComponent,
    ABillingComponent,
    ABillingSummuryComponent,
    HospitalProfileComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatCheckboxModule,MatChipsModule,
    MatMenuModule,MatDialogModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    FormsModule,HttpModule,Angular2CsvModule,
    NgxPrintModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"quick",component:QuickPatientComponent,canActivate:[AuthGuard]},
      {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
      {path:'home/formc',component:FormCComponent,canActivate:[AuthGuard]},
      {path:'home/formd',component:FormDComponent,canActivate:[AuthGuard]},
      {path:'home/forme',component:FormEComponent,canActivate:[AuthGuard]},
      {path:'home/formf',component:FormFComponent,canActivate:[AuthGuard]},
      {path:'home/formg',component:FormGComponent,canActivate:[AuthGuard]},
      {path:'home/formh',component:FormHComponent,canActivate:[AuthGuard]},
      {path:'home/form10',component:Form10Component,canActivate:[AuthGuard]},
      {path:'home/profile',component:ProfileScreenComponent,canActivate:[AuthGuard]},
      {path:'home/nis',component:NurseInstructionScreenComponent,canActivate:[AuthGuard]},
      {path:'home/ucs',component:UnitCreationScreenComponent,canActivate:[AuthGuard]},
      {path:'home/service',component:AddServiceComponent,canActivate:[AuthGuard]},
      {path:'home/billing',component:BillingComponent,canActivate:[AuthGuard]},
      {path:'home/billing-day-end',component:BillingDayEndComponent,canActivate:[AuthGuard]},
      {path:'patient-profile',component:PatientProfileComponent,canActivate:[AuthGuard]},
      {path:'home/demo',component:DemopreviewComponent,canActivate:[AuthGuard]},
      {path:'home/a-service',component:AAddServiceComponent,canActivate:[AuthGuard]},
      {path:'home/a-billing',component:ABillingComponent,canActivate:[AuthGuard]},
      {path:'home/a-summury',component:ABillingSummuryComponent,canActivate:[AuthGuard]},
      {path:'profile',component:HospitalProfileComponent,canActivate:[AuthGuard]}
      
      

  ]), BrowserAnimationsModule
  
  ],
  providers: [AuthGuard,AuthService,AdminService,ManagerGuard,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
