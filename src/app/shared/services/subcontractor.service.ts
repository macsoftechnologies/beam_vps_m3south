import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { DepartmentDto, UpdateDepartmentDto } from 'app/views/Models/DepartmentDto';
import { SubcontractorDto, UpdateSubcontractorDto, DeleteSubcontractorDto, MydocsDto } from 'app/views/Models/Subcontractor';

@Injectable({
  providedIn: 'root'
})
export class SubcontractorService {

  constructor(private http:HttpClient) { }
  public GetAllSubContractors(): Observable<any[]> {
    // var reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':' GET, PUT, POST, DELETE, HEAD, OPTIONS '});

    return this.http.get<any[]>(environment.API_URL + 'subcontractor/read.php');
  }

  public GetSubContractorsDocs(id:MydocsDto): Observable<any[]> {
    // var reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':' GET, PUT, POST, DELETE, HEAD, OPTIONS '});

    return this.http.post<any[]>(environment.API_URL + 'subcontractor/readuploadFiles.php',id);
  }


  public CreateSubContractor(subcont:SubcontractorDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'subcontractor/create.php', subcont);
  }
  public UpdateSubContractor(subcont:UpdateSubcontractorDto): Observable<any> {
    return this.http.post<any>(environment.API_URL +
       'subcontractor/update.php', subcont);
  }
  public UploadDocs(formData): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'subcontractor/uploadFiles.php', formData);
  }

  public DeleteSubContractor(req:DeleteSubcontractorDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'subcontractor/delete.php', req);
  }

  public DeleteSubContractorDocs(req:DeleteSubcontractorDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'subcontractor/deletedocs.php', req);
  }


}
