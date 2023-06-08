import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = 'http://localhost:8090/users/login';
  private logoutUrl = 'http://localhost:8090/users/logout';

  constructor(private http: HttpClient) {
  }

  login(user : User): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }

  logout(): Observable<any> {
    return this.http.post(this.logoutUrl, {});
  }
}
