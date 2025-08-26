import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { DeleteMechanicalWorkDto, MechanicalWorkDto, UpdateMechanicalWorkDto } from 'app/views/Models/mechanicalworkdto';

@Injectable({
  providedIn: 'root'
})
export class MechanicalworkService {

  constructor(private http:HttpClient) { }
  public GetMechanicalworks(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'mechanical/read.php');
  }

  public CreateNewMechanicalwork(req:MechanicalWorkDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'mechanical/create.php', req);
  }
  public UpdateMechanicalwork(req:UpdateMechanicalWorkDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'mechanical/update.php', req);
  }
  public DeleteMechanicalwork(req:DeleteMechanicalWorkDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'mechanical/delete.php', req);
  }

}
