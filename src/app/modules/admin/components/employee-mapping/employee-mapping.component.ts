import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { LevelService } from '../../services/level.service';
import { EmployeesService } from '../../services/employees.service';
import { Level } from '../../interfaces/level';
import { EmployeeDetails } from '../../interfaces/employee-details';

@Component({
  selector: 'app-employee-mapping',
  templateUrl: './employee-mapping.component.html',
  styleUrls: ['./employee-mapping.component.css']
})
export class EmployeeMappingComponent implements OnInit {
floatLabel = 'always';
candidateForm: FormGroup;
private _id: FormControl;
private _employee: FormControl;
private _level: FormControl;
/*private _date: FormControl; */
_levels: Level[] = [];
_employees: EmployeeDetails[] = [];
today = new Date();

  constructor(
    public snackBar: MatSnackBar,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _levelService: LevelService,
    private _employeeService: EmployeesService) { }

  ngOnInit() {
    this._getLevels();
    this._getEmployeeDetails();
    this._setProperties();
  }

  private _openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  private _setProperties(): void {
    this._id = new FormControl(this._activatedRoute.snapshot.paramMap.get('id'), Validators.required);
    this._level = new FormControl((this._levels !== [] ? this._levels : ''), Validators.required);
    this._employee = new FormControl((this._employees !== [] ? this._employees : ''), Validators.required);
    /*this._date = new FormControl('', Validators.required); */
    this.candidateForm = new FormGroup({
      _id: this._id,
      employee: this._employee,
      level: this._level,
      /*date: this._date */
    });
  }

  isValidId() {
    return this._id.valid || this._id.untouched;
  }

  isValidEmployee() {
    return this._employee.valid || this._employee.untouched;
  }

  isValidLevel() {
    return this._level.valid || this._level.untouched;
  }

  /*isValidDate() {
    return this._date.valid || this._date.untouched;
  } */

  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  private _getLevels(): void {
    this._levelService.getLevels()
    .subscribe(
      data => {
        this._levels = data;
        console.log(this._levels);
      },
      err => {
        console.log(err);
      }
    );
  }

  private _getEmployeeDetails(): void {
    this._employeeService.getAllEmployeeDetails()
    .subscribe(
      data => {
        this._employees = data;
        console.log(this._employees);
      },
      err => {
        console.log(err);
      }
    );
  }

  onSubmit(values): void {
    if (this.candidateForm.valid) {
      console.log(values);
    }else {
      this._openSnackBar('Information Correction', 'Failed');
    }
  }

}
