import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/Alumno/alumno';
import { AlumnoService } from 'src/app/Alumno/Service/alumno.service';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';

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
  private alumnosUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private alumnoService: CrudOperationsService<Alumno>){
      this.alumnosUrl = 'http://localhost:8090/alumnos';
  }

  onSubmit(alumnoId:number) {
    this.alumnoEdit.id = alumnoId;
    this.AlumnoUpdate();
    console.log(this.alumnoEdit)
  }

  ngOnInit(){
     this.listaAlumnos();
  }

  alumnoDelete(alumnoId: number){
    this.alumnoService.delete(this.alumnosUrl,alumnoId).subscribe(data => {
      console.log("alumno "+alumnoId+" borrado");
      this.listaAlumnos();
    });
  }

  AlumnoUpdate(){
    this.alumnoService.update(this.alumnosUrl, this.alumnoEdit).subscribe();
    console.log(this.alumnoEdit.nombre);
  }
  
  listaAlumnos() {
    this.alumnoService.getAll(this.alumnosUrl).subscribe(data => {
      this.alumnos = data;
    });
  }

}
