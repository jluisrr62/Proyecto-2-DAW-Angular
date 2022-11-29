import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/classes/alumno';
import { AlumnoService } from 'src/app/services/alumnoServices/alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent {
  alumno: Alumno={
    dni:"",
    nombre:"",
    nUsuario:"",
    contrasenia:""
  };
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private alummoService: AlumnoService) {
    this.alumno = new Alumno();
  }
  onSubmit() {
    this.alummoService.save(this.alumno).subscribe(result => this.gotoAlumnoList());
  }

  gotoAlumnoList(){
    this.router.navigate(['/alumnos']);
  }
}
