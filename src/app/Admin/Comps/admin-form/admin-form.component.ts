import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Admin } from 'src/app/Admin/admin';
import { CrudOperationsService } from 'src/app/Config/CRUD generico/crud-operations.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent {
  admin: Admin;
  private adminsUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: CrudOperationsService<Admin>) {
      this.admin = new Admin();
      this.adminsUrl = 'http://localhost:8090/admins';
    }
    onSubmit() {
      this.adminService.create(this.adminsUrl,this.admin).subscribe(result => this.gotoadminList());
    }

    gotoadminList(){
      this.router.navigate(['/admins']);
    }
}
