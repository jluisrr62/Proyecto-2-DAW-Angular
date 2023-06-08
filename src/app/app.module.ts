import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosListComponent } from './components/alumnoComps/alumnos-list/alumnos-list.component';
import { AlumnoFormComponent } from './components/alumnoComps/alumno-form/alumno-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsListComponent } from './components/adminComps/admins-list/admins-list.component';
import { AdminFormComponent } from './components/adminComps/admin-form/admin-form.component';
import { NavCompComponent } from './components/nav-comp/nav-comp.component';
import { LibroFormComponent } from './components/libroComps/libro-form/libro-form.component';
import { LibrosListComponent } from './components/libroComps/libros-list/libros-list.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { RegisterCompComponent } from './components/register-comp/register-comp.component';



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
    RegisterCompComponent
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
export class AppModule { }
