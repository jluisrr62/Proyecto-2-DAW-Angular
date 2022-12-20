import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/classes/alumno';
import { AlumnoService } from 'src/app/services/alumnoServices/alumno.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent {
  alumnos: Alumno[]=[];
  alumnoEdit: Alumno = {
    id: 0,
    dni:'',
    nombre:'',
    nUsuario:'',
    contrasenia:''
  };

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private alumnoService: AlumnoService){
  }

  onSubmit(alumnoId:Number) {
    this.AlumnoUpdate(alumnoId);
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

  AlumnoUpdate(alumnoId :Number){
    this.alumnoService.update(this.alumnoEdit, alumnoId).subscribe();
    console.log(alumnoId);
    console.log(this.alumnoEdit.nombre);
  }
  
  listaAlumnos() {
    this.alumnoService.findAll().subscribe(data => {
      this.alumnos = data;
    });
  }

}
