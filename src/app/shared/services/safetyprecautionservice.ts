import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { RequestDto, EditRequestDto } from 'app/views/Models/RequestDto';
import { ActivityDto, UpdateActivityDto, DeleteActivityDto } from 'app/views/Models/ActivityDto';
import { PrecautionDto, UpdatePrecautionDto, DeletePrecautionDto } from 'app/views/Models/precaution';

@Injectable({
  providedIn: 'root'
})
export class SafetyprecautionService {

  constructor(private http:HttpClient) { }
  public GetSafetyprecautions(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'precaution/read.php');
  }

  public CreateNewSafetyprecaution(req:PrecautionDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'precaution/create.php', req);
  }
  public UpdateSafetyprecaution(req:UpdatePrecautionDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'precaution/update.php', req);
  }
  public DeleteSafetyprecaution(req:DeletePrecautionDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'precaution/delete.php', req);
  }

  // public SetselectedRequest(row)
  // {
  //   this.SelectedRequestData=row;
  // }
  // public GetSelectedRequestData():Observable<any[]> {
  //   return this.SelectedRequestData;
  // }
}
