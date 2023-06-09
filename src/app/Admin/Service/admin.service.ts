import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Admin/admin';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService{

  private adminsUrl: string;

  constructor( private http: HttpClient) {
    this.adminsUrl = 'http://localhost:8090/admins'
  }
  
  public findAll(){
  }

}

