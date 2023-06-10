import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/Authentication/authentication.service';
import { Admin } from 'src/app/Admin/admin';
import { Alumno } from 'src/app/Alumno/alumno';

@Component({
  selector: 'app-register-comp',
  templateUrl: './register-comp.component.html',
  styleUrls: ['./register-comp.component.css']
})
export class RegisterCompComponent {
  tipoUsuario : string  ="";
  protected admin = new Admin();
  protected alumno = new Alumno();

  constructor(
    private authService: AuthenticationService
    ) {

  }

  comprobarTipo(){
    if(this.tipoUsuario === 'admin')
      return true;
    else
      return false; 
  }

  onSubmit(){
    if(this.tipoUsuario === 'admin'){
      console.log(this.admin)
      this.authService.registerAdmin(this.admin);
    }else if(this.tipoUsuario === 'alumno'){
      console.log(this.alumno)
      this.authService.registerAlumno(this.alumno);
    }
  }
}
