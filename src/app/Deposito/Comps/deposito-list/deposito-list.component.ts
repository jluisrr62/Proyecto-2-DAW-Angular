import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposito } from '../../deposito';
import { AuthenticationService } from 'src/app/User/Service/Authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';

@Component({
  selector: 'app-deposito-list',
  templateUrl: './deposito-list.component.html',
  styleUrls: ['./deposito-list.component.css']
})
export class DepositoListComponent {

  depositos : Deposito[] = []
  depositosUrl : string = '';

  constructor(
    public authService: AuthenticationService,
    private http: HttpClient
  ){
    this.depositosUrl = 'http://localhost:8090/depositos';
  }

  ngOnInit(){
    this.listaDepositosByUsername();
  }

  depositoDelete(depositoNumColegiado : string, depositoIsbn : string, depositoFecha : string) {
    console.log(depositoNumColegiado,depositoIsbn,depositoFecha);
    this.http.delete(`${this.depositosUrl}?nColegiado=${depositoNumColegiado}&isbn=${depositoIsbn}&fecha=${depositoFecha}`).subscribe(data => this.listaDepositosByUsername);
  }

  listaDepositosByUsername(){
    this.getListaDepositosByUsername(this.authService.getUserName()).subscribe(data => {
      this.depositos = data;
    })
  }

  getListaDepositosByUsername(username : string) : Observable<any> {
    return this.http.get(`${this.depositosUrl}/ByUsername?username=${username}`);
  }
}
