import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/classes/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnosUrl: string;

  constructor(private http: HttpClient) {
    this.alumnosUrl = 'http://localhost:8090/alumnos';
  }

  public findAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.alumnosUrl);
  }

  public save(alumno: Alumno) {
    return this.http.post<Alumno>(this.alumnosUrl, alumno);
  }

  public delete(alumno: Alumno) {
    return this.http.delete<Alumno>(this.alumnosUrl+"/"+alumno.dni)
  }
}
