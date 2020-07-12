import { Component, OnInit } from '@angular/core';
// import { EMPLOYEES } from './../employees';

import { Employee } from './../employee';
import { EmployeesService } from './../data/employees.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  // employees = EMPLOYEES;
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    // this.employees = this.employeesService.getEmployees();
    this.employeesService.loadEmployeesList().subscribe(employees => {
      this.employees = employees;
    });
  }

}




