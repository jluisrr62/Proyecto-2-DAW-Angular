import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/Libro/libro';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';


@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent {
  libros: Libro[]=[];
  private librosUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private libroService: CrudOperationsService<Libro>){
      this.librosUrl = 'http://localhost:8090/libros';
  }

  ngOnInit(){
    this.listaLibros();
  }

  listaLibros() {
    this.libroService.getAll(this.librosUrl).subscribe(data => {
      this.libros = data;
    });
  }
}
