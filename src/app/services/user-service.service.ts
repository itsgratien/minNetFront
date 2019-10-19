import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private backendUrl = `${environment.appUrl}/users`;
  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/login`, data);
  }
  register(data): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/create`, data);
  }
}
