import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { DeleteZoneStatus, GetZoneStatusDto, UpdateZoneStatus, ZoneStatusDto } from 'app/views/Models/Zone-statusDto';

@Injectable({
  providedIn: 'root'
})
export class ZoneStatusService {

  constructor(private http:HttpClient) { }
  public GetZoneStatus(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'zones/read.php');
  }
  public GetIndividualZone(req:GetZoneStatusDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'zones/read_zones.php', req);
  }
  public CreateNewZoneStatus(req:ZoneStatusDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'zones/create.php', req);
  }
  public UpdateZoneStatus(req:UpdateZoneStatus): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'zones/update.php', req);
  }
  public DeleteZoneStatus(req:DeleteZoneStatus): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'zones/delete.php', req);
  }

}
