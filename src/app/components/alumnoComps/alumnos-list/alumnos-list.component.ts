import { Component } from '@angular/core';
import { Alumno } from 'src/app/classes/alumno';
import { AlumnoService } from 'src/app/services/alumnoServices/alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent {
  alumnos: Alumno[]=[];

  constructor(private alumnoService: AlumnoService){

  }

  ngOnInit(){
     this.listaAlumnos();
  }

  AlumnoDelete(alumnoId: number){
    this.alumnoService.delete(alumnoId).subscribe(data => {
      console.log("alumno "+alumnoId+" borrado");
      this.listaAlumnos();
    });
  }
  
  listaAlumnos() {
    this.alumnoService.findAll().subscribe(data => {
      this.alumnos = data;
    });
  }

}
