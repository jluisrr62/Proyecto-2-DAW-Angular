import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user';
import { Admin } from 'src/app/Admin/admin';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';
import { Alumno } from 'src/app/Alumno/alumno';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = 'http://localhost:8090/users/login';
  private adminsUrl = 'http://localhost:8090/admins';
  private alumnosUrl = 'http://localhost:8090/alumnos'

  constructor(
    private http: HttpClient,
    private router: Router, 
    private crudAdmin: CrudOperationsService<Admin>,
    private crudAlumno: CrudOperationsService<Alumno>,
    ) {

  }

  getUserName(){
    return sessionStorage.getItem('username') || '';
  }

  registerAdmin(admin : Admin) {
    this.crudAdmin.create(this.adminsUrl, admin).subscribe(result => 
      this.router.navigate(['/login']));
  }

  registerAlumno(alumno : Alumno) {
    this.crudAlumno.create(this.alumnosUrl, alumno).subscribe(result => 
      this.router.navigate(['/login']));
  }

  login(user : User): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }

  logout(){
    this.router.navigate(['/welcome']);
    sessionStorage.clear();
  }

  comprobarRolAdmin() {
    if(sessionStorage.getItem('rol') == 'admin'){
      return  true;
    }else{
      return false;
    }
  }

  comprobarRolUser() {
    if(sessionStorage.getItem('rol') == 'alumno'){
      return  true;
    }else{
      return false;
    }
  }

  comprobarSiRol() {
    if(sessionStorage.getItem('rol') == 'admin' || sessionStorage.getItem('rol') == 'alumno'){
      return  true;
    }else{
      return false;
    }
  }
}
