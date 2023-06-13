import { Component } from '@angular/core';
import { Recogida } from '../../recogida';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/User/Service/Authentication/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recogida-list',
  templateUrl: './recogida-list.component.html',
  styleUrls: ['./recogida-list.component.css']
})
export class RecogidaListComponent {
  recogidas : Recogida[] = []
  recogidasUrl : string = '';

  constructor(
    public authService: AuthenticationService,
    private http: HttpClient,
    private recogidaService: CrudOperationsService<Recogida>
  ){
    this.recogidasUrl = 'http://localhost:8090/recogidas';
  }

  ngOnInit(){
    this.getLista();
  }

  listaRecogidas() {
    this.recogidaService.getAll(this.recogidasUrl).subscribe(data => {
      this.recogidas = data;
    });
  }

  

  recogidaDelete(recogidaDni : string, recogidaIsbn : string, recogidaFecha : string) {
    console.log(recogidaDni,recogidaIsbn,recogidaFecha);
    this.http.delete(`${this.recogidasUrl}?dni=${recogidaDni}&isbn=${recogidaIsbn}&fecha=${recogidaFecha}`).subscribe(data => this.getLista());
  }

  listaRecogidasByUsername(){
    this.getListaRecogidasByUsername(this.authService.getUserName()).subscribe(data => {
      this.recogidas = data;
    })
  }

  getListaRecogidasByUsername(username : string) : Observable<any> {
    return this.http.get(`${this.recogidasUrl}/ByUsername?username=${username}`);
  }

  getLista(){
    if(this.authService.comprobarRolAdmin())
      this.listaRecogidas();
    else if(this.authService.comprobarRolUser())
      this.listaRecogidasByUsername();
  }
}
