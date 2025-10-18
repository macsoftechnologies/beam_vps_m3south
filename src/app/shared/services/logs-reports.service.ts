import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogReportsService {

  constructor(private http:HttpClient) { }

  // public GetAllLogsDetails(): Observable<any[]> {
  //   return this.http.get<any[]>(environment.API_URL + 'request/log.php');
  // }

    // pagination
    public logreports(data):Observable<any> {
      return this.http.post<any>(environment.API_URL + 'employee/search.php', data );
    }
}
