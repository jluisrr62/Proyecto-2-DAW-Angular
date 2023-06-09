import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-comp',
  templateUrl: './nav-comp.component.html',
  styleUrls: ['./nav-comp.component.css']
})
export class NavCompComponent {
  constructor(
    protected authService: AuthenticationService
    ){ }

    
}
