import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Libro } from 'src/app/classes/libro';
import { CrudOperationsService } from 'src/app/services/crud-operations.service';


@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent {
  libro: Libro;
  private librosUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private libroService: CrudOperationsService<Libro>) {
      this.libro = new Libro();
      this.librosUrl = 'http://localhost:8090/libros';
    }
    onSubmit() {
      this.libroService.create(this.librosUrl,this.libro).subscribe(result => this.gotolibroList());
    }

    gotolibroList(){
      this.router.navigate(['/libros']);
    }
}
