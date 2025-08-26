import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { DeleteElectricalWorkDto, ElectricalWorkDto, UpdateElectricalWorkDto } from 'app/views/Models/electricalworkdto';

@Injectable({
  providedIn: 'root'
})
export class ElectricalworkService {

  constructor(private http:HttpClient) { }
  public GetElectricalworks(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'electrical/read.php');
  }

  public CreateNewElectricalwork(req:ElectricalWorkDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'electrical/create.php', req);
  }
  public UpdateElectricalwork(req:UpdateElectricalWorkDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'electrical/update.php', req);
  }
  public DeleteElectricalwork(req:DeleteElectricalWorkDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'electrical/delete.php', req);
  }

}
