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
    return this.http.get<Alumno[]>(this.alumnosUrl+"/mostrar");
  }

  public save(alumno: Alumno) {
    return this.http.post<Alumno>(this.alumnosUrl, alumno);
  }

  public delete(alumnoId: number) {
    return this.http.delete<number>(this.alumnosUrl+"/"+alumnoId)
  }

  public update(alumno:Alumno, alumnoId: Number) {
    console.log('se manda la peticion put al alumno' + alumnoId + ' de nombre ' + alumno.nombre)
    return this.http.put(this.alumnosUrl+"/"+alumnoId, alumno)
  }
}
