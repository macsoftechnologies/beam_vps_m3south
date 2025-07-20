import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyotpService {

  constructor(private http:HttpClient) { }

  public VerifyOtp(data):Observable<any> {
    // console.log('346546')
    return this.http.post<any>(environment.API_URL + 'user/verifyotp.php', data );
  }
}
