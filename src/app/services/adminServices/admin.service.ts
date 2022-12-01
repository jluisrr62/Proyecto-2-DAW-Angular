import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminsUrl: string="";

  constructor(private http: HttpClient) {
    this.adminsUrl = 'http://localhost:8090/admins';
  }

  public findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminsUrl);
  }

  public save(admin: Admin) {
    return this.http.post<Admin>(this.adminsUrl, admin);
  }
}

