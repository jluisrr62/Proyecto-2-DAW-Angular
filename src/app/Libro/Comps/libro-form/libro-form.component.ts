import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Libro } from 'src/app/Libro/libro';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';
import { Asignatura } from '../../Asignatura/asignatura';


@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent {
  libro: Libro;
  private librosUrl: string;
  private asignaturasUrl: string;
  nombresAsignaturas: string[] = []; 
  asignaturas: Asignatura[] =[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private libroService: CrudOperationsService<Libro>,
    private asignaturaService: CrudOperationsService<Asignatura>) {
      this.libro = new Libro();
      this.librosUrl = 'http://localhost:8090/libros';
      this.asignaturasUrl = 'http://localhost:8090/asignaturas';
    }
    
    ngOnInit(){
      this.getAsignaturas();
    }

    onSubmit() {
      this.libroService.create(this.librosUrl,this.libro).subscribe(result => this.gotolibroList());
    }

    gotolibroList(){
      this.router.navigate(['/libros']);
    }

    getAsignaturas(){
      this.asignaturaService.getAll(this.asignaturasUrl).subscribe(data => {
        this.asignaturas = data;
      })
    }

    getNombresAsignaturas(){
      this.nombresAsignaturas = [];
      this.asignaturas.forEach(asignatura => {
        this.nombresAsignaturas.push(asignatura.nombre);
      });
  
      return this.nombresAsignaturas;
    }
}
