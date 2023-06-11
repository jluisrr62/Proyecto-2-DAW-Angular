import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosListComponent } from './Alumno/Comps/alumnos-list/alumnos-list.component';
import { AlumnoFormComponent } from './Alumno/Comps/alumno-form/alumno-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsListComponent } from './Admin/Comps/admins-list/admins-list.component';
import { AdminFormComponent } from './Admin/Comps/admin-form/admin-form.component';
import { NavCompComponent } from './Elementos/nav-comp/nav-comp.component';
import { LibroFormComponent } from './Libro/Comps/libro-form/libro-form.component';
import { LibrosListComponent } from './Libro/Comps/libros-list/libros-list.component';
import { LoginCompComponent } from './User/Comps/login-comp/login-comp.component';
import { RegisterCompComponent } from './User/Comps/register-comp/register-comp.component';
import { FooterCompComponent } from './Elementos/footer-comp/footer-comp.component';
import { MainCompComponent } from './Elementos/main-comp/main-comp.component';
import { Router } from '@angular/router';

export function initializeApp(router: Router) {
  return () => {
    return new Promise<void>((resolve) => {
      // Navigation logic to the desired component
      router.navigate(['/welcome']).then(() => {
        resolve();
      });
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListComponent,
    AlumnoFormComponent,
    AdminsListComponent,
    AdminFormComponent,
    NavCompComponent,
    LibroFormComponent,
    LibrosListComponent,
    LoginCompComponent,
    RegisterCompComponent,
    FooterCompComponent,
    MainCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  

}
