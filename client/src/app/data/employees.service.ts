import { Injectable } from '@angular/core';
import { Employee } from './../employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  private employeesList: Employee[] = [];

  // private employeesList: Employee[] = [
  //   {
  //     id: 1,
  //     name: "Kurganova Marina",
  //     position: "Materials Developer",
  //     imageUrl: "../../../assets/images/person.png",
  //     description: "Senior teacher with more than 20 years of experience in teaching"
  //   },
  //   {
  //     id: 1,
  //     name: "Osmukha Zoia",
  //     position: "Social Connections Manager",
  //     imageUrl: "../../../assets/images/person.png",
  //     description: "Social Connections Manager with more ..."
  //   },
  //   {
  //     id: 1,
  //     name: "Pysarenko Oleg",
  //     position: "Technical Manager",
  //     imageUrl: "../../../assets/images/person.png",
  //     description: "Technical Manager with  ..."
  //   },
  //   {
  //     id: 1,
  //     name: "Sapozhnikova Viktoria",
  //     position: "Schedules Developer",
  //     imageUrl: "../../../assets/images/person.png",
  //     description: "Schedules Developer with  ..."
  //   }
  // ];

  getEmployees(){
    //created a copy
    //return a new Array and use the spread operator to fill the array
    return [...this.employeesList];
  }

  addEmployee(employee: Employee){
    this.employeesList.push(employee);
  }

  //also update AppModule
  constructor(private http: HttpClient) {
  }

  loadEmployeesList(): Observable<Employee[]> {
    const url = 'https://easy2learn-portfolio.herokuapp.com/api/employees';
    return this.http.get<Employee[]>(url);
  }
}
