import { Component } from '@angular/core';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/adminServices/admin.service';


@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent {
  admins: Admin[]=[];

  constructor(private adminService: AdminService){

  }

  ngOnInit(){
    this.adminService.findAll().subscribe(data => {
      this.admins = data;
    });
  }
}
