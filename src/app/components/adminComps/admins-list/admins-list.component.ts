import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/adminServices/admin.service';
import { CrudOperationsService } from 'src/app/services/crud-operations.service';


@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent {
  admins: Admin[]=[];
  private adminsUrl: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private adminService: CrudOperationsService<Admin>){
      this.adminsUrl = 'http://localhost:8090/admins';
  }

  ngOnInit(){
    this.listaAdmins();
  }

  listaAdmins() {
    this.adminService.getAll(this.adminsUrl).subscribe(data => {
      this.admins = data;
    });
  }
}
