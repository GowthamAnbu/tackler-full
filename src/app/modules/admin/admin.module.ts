import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard-admin/dashboard-admin.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../../material/material.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar-admin/navbar-admin.component';
import { DashboardService } from './services/dashboard.service';
import { CandidateService } from './services/candidate.service';
import { EmployeesService } from './services/employees.service';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { TechnologyService } from './services/technology.service';
import { EmployeeMappingComponent } from './components/employee-mapping/employee-mapping.component';
import { LevelService } from './services/level.service';
import { CandidateProgressService } from './services/candidate-progress.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    CandidatesComponent,
    AdminComponent,
    EmployeesComponent,
    NavbarComponent,
    CreateCandidateComponent,
    EmployeeMappingComponent
  ],
  bootstrap: [AdminComponent],
  providers: [
    DashboardService,
    CandidateService,
    EmployeesService,
    TechnologyService,
    LevelService,
    CandidateProgressService]
})
export class AdminModule { }
