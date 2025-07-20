import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { DepartmentDto, UpdateDepartmentDto, DeleteDepartmentDto } from 'app/views/Models/DepartmentDto';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  public GetAllRoles(): Observable<any[]> {
    // var reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':' GET, PUT, POST, DELETE, HEAD, OPTIONS '});

    return this.http.get<any[]>(environment.API_URL + 'role/read.php');
  }
  public GetAllDepartments(): Observable<any[]> {
    // var reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':' GET, PUT, POST, DELETE, HEAD, OPTIONS '});

    return this.http.get<any[]>(environment.API_URL + 'department/read.php');
  }

  public CreateDepartment(department:DepartmentDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'department/create.php', department);
  }
  public UpdateDepartment(department:UpdateDepartmentDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'department/update.php', department);
  }

  public DeleteDepartment(req:DeleteDepartmentDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'department/delete.php', req);
  }



}
