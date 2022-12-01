import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoFormComponent } from './components/alumnoComps/alumno-form/alumno-form.component';
import { AlumnosListComponent } from './components/alumnoComps/alumnos-list/alumnos-list.component';
import { AdminsListComponent } from './components/adminComps/admins-list/admins-list.component';
import { AdminFormComponent } from './components/adminComps/admin-form/admin-form.component';

const routes: Routes = [
  { path:'alumnos', component: AlumnosListComponent },
  { path:'addalumno', component: AlumnoFormComponent },
  { path:'admins', component: AdminsListComponent },
  { path:'addadmin', component: AdminFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
