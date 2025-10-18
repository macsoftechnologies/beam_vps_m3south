// audit.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuditService } from '../services/audit-logger.service';

// ✅ Place it here (top-level, before the class)
const EXCLUDED_APIS = [
  '/request',
  'employee/newuserlog.php',
  '/search.php',
  '/read_zones.php'
];

@Injectable()
export class AuditInterceptor implements HttpInterceptor {
  constructor(private audit: AuditService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isCrud = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);

    // ❌ Skip excluded APIs
    const shouldLog = !EXCLUDED_APIS.some((excluded) => req.url.includes(excluded));

    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && isCrud && shouldLog) {
          this.audit.sendLog('API_SUCCESS', {
            method: req.method,
            url: req.url,
            body: req.body,
            status: event.status,
            response: event.body
          });
        }
      },
      (error: HttpErrorResponse) => {
        if (isCrud && shouldLog) {
          this.audit.sendLog('API_FAILURE', {
            method: req.method,
            url: req.url,
            body: req.body,
            status: error.status,
            error: error.message
          });
        }
      }
    );
  }
}
