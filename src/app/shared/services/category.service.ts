import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Category } from 'app/views/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  
  public GetAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'category/read.php');
  }
  public CreateCategory(cat:Category): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'category/create.php', cat);
  }

}
