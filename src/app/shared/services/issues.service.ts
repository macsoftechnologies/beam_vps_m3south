import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http:HttpClient) { }
  public CreateIssues(formdata): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'issues/create.php', formdata);
  }
}
