import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { EmployeesDto, DeleteEmployeeDto } from 'app/views/Models/EmployeesDto';
import { ChangePasswordDto } from 'app/views/Models/AccountManagement';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  constructor(private http:HttpClient) { }

  public ChangePassword(emp:ChangePasswordDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'user/changepassword.php', emp);
  }


}
