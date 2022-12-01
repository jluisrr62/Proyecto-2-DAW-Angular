import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/adminServices/admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent {
  admin: Admin={
    dni:"",
    nombre:"",
    nUsuario:"",
    contrasenia:"",
    n_colegiado:""
  };
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: AdminService) {
      this.admin = new Admin();
    }
    onSubmit() {
      this.adminService.save(this.admin).subscribe(result => this.gotoadminList());
    }

    gotoadminList(){
      this.router.navigate(['/admins']);
    }
}
