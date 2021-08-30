import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class MainHttpInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customizedRequest = httpRequest.clone({
      url: `${environment.apiUrl}${environment.context}` + '/' + httpRequest.url,
      headers: httpRequest.headers
        .set('Access-Control-Allow-Origin', '*')
        .set('Set-Cookie', 'SameSite=None')
        .set('Content-Type', 'application/json')
    });
    return next.handle(customizedRequest);
  }
}
