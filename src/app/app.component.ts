import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './User/Service/Authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BancoDeLibrosApi'
  constructor(
    protected authService: AuthenticationService,
    private router: Router
    ){}

    ngOnInit(): void {
      this.router.navigate(['/welcome']);
    }
}
