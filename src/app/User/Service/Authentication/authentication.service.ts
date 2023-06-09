import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user';

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

  comprobarRolAdmin() {
    if(sessionStorage.getItem('rol') == 'admin'){
      return  true;
    }else{
      return false;
    }
  }

  comprobarRolUser() {
    if(sessionStorage.getItem('rol') == 'user'){
      return  true;
    }else{
      return false;
    }
  }
}
