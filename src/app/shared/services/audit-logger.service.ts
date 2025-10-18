// audit.service.ts
import { Injectable } from '@angular/core';
import { config } from 'config';
import { EmployeeService } from './employee.service';

@Injectable({ providedIn: 'root' })
export class AuditService {
  constructor(private empservice: EmployeeService) {}

  private formDataToObject(formData: FormData): any {
    const obj: any = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  sendLog(action: string, apiData: any) {
    const user = JSON.parse(localStorage.getItem('m3south_EGRET_USER') || '{}');

    // Convert FormData -> Object
    if (apiData?.body instanceof FormData) {
      apiData.body = this.formDataToObject(apiData.body);
    }

    const logEntry = {
      user,
      action,
      apiData,
      timestamp: config.getDenmarkTime.full(),
    };

    // For now, just log to console
    if (action === 'API_FAILURE') {
      console.error('AUDIT LOG:', logEntry);
    } else {
      console.log('AUDIT LOG:', logEntry);
    }
    const apiUrl = logEntry.apiData.url;

const basePath = '/m3south/beamapi/services/';
const relativePath = apiUrl.split(basePath)[1];
    const logdata = {
      action: logEntry.action,
      body: JSON.stringify(logEntry.apiData.body),
      method: logEntry.apiData.method,
      url: relativePath,
      status: logEntry.apiData.status,
      user: JSON.stringify(logEntry.user),
      timestamp: logEntry.timestamp
    }
    this.empservice.addUserLog(logdata).subscribe({
  next: (res) => {
    console.log('User log saved successfully', res);
  },
  error: (err) => {
    console.error('Error saving user log', err);
  }
});
  }
}
