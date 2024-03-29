import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/User/Service/Authentication/authentication.service';

@Component({
  selector: 'app-nav-comp',
  templateUrl: './nav-comp.component.html',
  styleUrls: ['./nav-comp.component.css']
})
export class NavCompComponent {
  constructor(
    public authService: AuthenticationService
    ){ }
    isNavbarOpen: boolean = false;

    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
}
