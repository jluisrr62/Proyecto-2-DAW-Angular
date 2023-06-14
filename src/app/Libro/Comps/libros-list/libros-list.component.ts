import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/Libro/libro';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';
import { Asignatura } from '../../Asignatura/asignatura';
import { AuthenticationService } from 'src/app/User/Service/Authentication/authentication.service';
import { RecogidaCreate } from '../../Recogida/recogida-create';
import { HttpClient } from '@angular/common/http';
import { DepositoCreate } from 'src/app/Deposito/deposito-create';


@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.css']
})
export class LibrosListComponent {
  libros: Libro[]=[];
  asignaturas: Asignatura[] =[];
  nombresAsignaturas: string[] = []; 
  libroEdit: Libro = {
    id: 0,
    asignatura: '',
    isbn:'',
    nombre: '',
    fechasDepositos: [],
    fechasRecogidas: []
  };

  depositoCreate: DepositoCreate = {
    nombreUsuario : '',
    idLibro :  0
  }

  recogidaCreate: RecogidaCreate = {
    nombreUsuario : '',
    idLibro :  0
  }

  private librosUrl: string;
  private asignaturasUrl: string;
  private recogidasUrl: string;
  private depositosUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    public authService: AuthenticationService,
    private http: HttpClient,
    private libroService: CrudOperationsService<Libro>,
    private asignaturaService: CrudOperationsService<Asignatura>){
      this.librosUrl = 'http://localhost:8090/libros';
      this.asignaturasUrl = 'http://localhost:8090/asignaturas';
      this.recogidasUrl = 'http://localhost:8090/recogidas';
      this.depositosUrl = 'http://localhost:8090/depositos';
  }

  onSubmit(libroId:number) {
    this.libroEdit.id = libroId;
    this.libroUpdate();
    console.log(this.libroEdit)
  }

  ngOnInit(){
    this.listaLibros();
    this.getAsignaturas();
  }

  libroUpdate(){
    console.log(this.libroEdit);
    this.libroService.update(this.librosUrl, this.libroEdit).subscribe();
  }

  libroDelete(libroId: number){
    this.libroService.delete(this.librosUrl,libroId).subscribe(data => {
      console.log("libro "+libroId+" borrado");
      this.listaLibros();
    })
  }

  listaLibros() {
    this.libroService.getAll(this.librosUrl).subscribe(data => {
      this.libros = data;
    });
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

  createRecogida(nombreUsuario: String , idLibro : number){
    this.recogidaCreate.idLibro = idLibro;
    this.recogidaCreate.nombreUsuario = nombreUsuario;

    return this.http.post<RecogidaCreate>(this.recogidasUrl, this.recogidaCreate).subscribe( result => console.log(result));
  }


  createDeposito(nombreUsuario: String , idLibro : number){
    this.depositoCreate.idLibro = idLibro;
    this.depositoCreate.nombreUsuario = nombreUsuario;

    return this.http.post<RecogidaCreate>(this.depositosUrl, this.depositoCreate).subscribe( result => console.log(result));
  }
}
