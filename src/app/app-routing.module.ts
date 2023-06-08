import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoFormComponent } from './components/alumnoComps/alumno-form/alumno-form.component';
import { AlumnosListComponent } from './components/alumnoComps/alumnos-list/alumnos-list.component';
import { AdminsListComponent } from './components/adminComps/admins-list/admins-list.component';
import { AdminFormComponent } from './components/adminComps/admin-form/admin-form.component';
import { LibrosListComponent } from './components/libroComps/libros-list/libros-list.component';
import { LibroFormComponent } from './components/libroComps/libro-form/libro-form.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { RegisterCompComponent } from './components/register-comp/register-comp.component';
import { GuardAdminsGuard } from './guards/guard-admins.guard';

const routes: Routes = [
  { path:'alumnos', component: AlumnosListComponent , canActivate : [GuardAdminsGuard] },
  { path:'addalumno', component: AlumnoFormComponent , canActivate : [GuardAdminsGuard] },
  { path:'admins', component: AdminsListComponent , canActivate : [GuardAdminsGuard] },
  { path:'addadmin', component: AdminFormComponent , canActivate : [GuardAdminsGuard] },
  { path:'libros', component: LibrosListComponent },
  { path:'addlibro', component: LibroFormComponent, canActivate : [GuardAdminsGuard] },
  { path:'login', component: LoginCompComponent },
  { path:'register', component: RegisterCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
