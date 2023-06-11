import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoFormComponent } from './Alumno/Comps/alumno-form/alumno-form.component';
import { AlumnosListComponent } from './Alumno/Comps/alumnos-list/alumnos-list.component';
import { AdminsListComponent } from './Admin/Comps/admins-list/admins-list.component';
import { AdminFormComponent } from './Admin/Comps/admin-form/admin-form.component';
import { LibrosListComponent } from './Libro/Comps/libros-list/libros-list.component';
import { LibroFormComponent } from './Libro/Comps/libro-form/libro-form.component';
import { LoginCompComponent } from './User/Comps/login-comp/login-comp.component';
import { RegisterCompComponent } from './User/Comps/register-comp/register-comp.component';
import { GuardAdminsGuard } from './Config/guards/guard-admins.guard';
import { MainCompComponent } from './Elementos/main-comp/main-comp.component';

const routes: Routes = [
  { path:'alumnos', component: AlumnosListComponent , canActivate : [GuardAdminsGuard] },
  { path:'addalumno', component: AlumnoFormComponent , canActivate : [GuardAdminsGuard] },
  { path:'admins', component: AdminsListComponent , canActivate : [GuardAdminsGuard] },
  { path:'addadmin', component: AdminFormComponent , canActivate : [GuardAdminsGuard] },
  { path:'libros', component: LibrosListComponent },
  { path:'addlibro', component: LibroFormComponent, canActivate : [GuardAdminsGuard] },
  { path:'login', component: LoginCompComponent },
  { path:'register', component: RegisterCompComponent },
  { path:'welcome', component: MainCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
