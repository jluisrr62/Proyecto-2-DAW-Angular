import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { AuthenticationService } from '../../Service/Authentication/authentication.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit{
  user : User;
  sessionId: any = "";
  private headers = new HttpHeaders().set('Authorization', 'token');
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private http: HttpClient) {
    this.user = new User()
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.authService.login(this.user)
      .subscribe(
        response => {
          // Login successful, handle response or redirect
          console.log('Login successful', response);
          this.sessionId = response.sessionId;
          
          sessionStorage.setItem(
            'token',
            this.sessionId
          );

          sessionStorage.setItem(
            'rol',
            response.rol
          )
          this.router.navigate(['/']);
        },
        error => {
          // Login failed, handle error or display error message
          console.error('Login failed', error);
        }
      );
  }
}
