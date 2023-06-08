import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BancoDeLibrosApp';

  comprobarRol() {
    if(sessionStorage.getItem('rol') == 'admin'){
      return  true;
    }else{
      return false;
    }
  }

  ngOnInit(): void {
      this.comprobarRol;
  }
}
