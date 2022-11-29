import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoFormComponent } from './components/alumnoComps/alumno-form/alumno-form.component';
import { AlumnosListComponent } from './components/alumnoComps/alumnos-list/alumnos-list.component';

const routes: Routes = [
  { path:'alumnos', component: AlumnosListComponent },
  { path:'addalumno', component: AlumnoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
