import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { EmployeesDto, DeleteEmployeeDto, EmployeeSubDto, UpdateEmployeeSubDto, UpdateEmployeeDeptDto, EmployeeDeptDto, Employee, UpdateEmployee } from 'app/views/Models/EmployeesDto';
import { DeptWiseEmps } from 'app/views/Models/DepartmentDto';
import { UniqueUser } from 'app/views/Models/UniqueUserDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  public GetAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'employee/read.php');
  }
  public GetAllEmployeesBySubContrId(id): Observable<any[]> {
    // var reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':' GET, PUT, POST, DELETE, HEAD, OPTIONS '});

    return this.http.get<any[]>(environment.API_URL + 'employee/readlist.php?subcont='+id);
  }
  public GetAllEmployeesByDeptId(id:DeptWiseEmps): Observable<any[]> {
    // var reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':' GET, PUT, POST, DELETE, HEAD, OPTIONS '});

    return this.http.post<any[]>(environment.API_URL + 'employee/emplistdepId.php',id);
  }

  public CheckUsername(username:UniqueUser): Observable<any[]> {
    return this.http.post<any[]>(environment.API_URL + 'employee/readUsername.php',username);
  }

  public CreateEmployees(emp:Employee): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/createemp.php', emp);
  }
  public UpdateEmployees(emp:UpdateEmployee): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/updateemp.php', emp);
  }

  public CreateEmployeeswithSub(emp:EmployeeSubDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/createsubemp.php', emp);
  }
  public CreateEmployeeswithDept(emp:EmployeeDeptDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/createdepemp.php', emp);
  }
  public UpdateEmployeeswithSub(emp:UpdateEmployeeSubDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/updatesubemp.php', emp);
  }
  public UpdateEmployeeswithDept(emp:UpdateEmployeeDeptDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/updatedepemp.php', emp);
  }

  public DeleteEmployees(req:DeleteEmployeeDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/delete.php', req);
  }

  // User Delete
  public DeleteUser(req:DeleteEmployeeDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'employee/userdelete.php', req)
  }

}
