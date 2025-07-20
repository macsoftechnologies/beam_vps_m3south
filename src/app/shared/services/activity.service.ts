import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { RequestDto, EditRequestDto } from 'app/views/Models/RequestDto';
import { ActivityDto, UpdateActivityDto, DeleteActivityDto } from 'app/views/Models/ActivityDto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  SelectedRequestData:any={};
  constructor(private http:HttpClient) { }
  public GetAllActivites(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'activity/read.php');
  }

  public CreateNewActivity(req:ActivityDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'activity/create.php', req);
  }
  public UpdateActivity(req:UpdateActivityDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'activity/update.php', req);
  }
  public DeleteActivity(req:DeleteActivityDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'activity/delete.php', req);
  }

  // public SetselectedRequest(row)
  // {
  //   this.SelectedRequestData=row;
  // }
  // public GetSelectedRequestData():Observable<any[]> {
  //   return this.SelectedRequestData;
  // }
}
