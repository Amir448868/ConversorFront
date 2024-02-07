import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/services/userservices';

@Component({
  selector: 'app-crudusers',
  templateUrl: './crudusers.component.html',
  styleUrls: ['./crudusers.component.css']
})
export class CrudusersComponent implements OnInit {
  ngOnInit(): void {
    this.UserServices.getAll().then(users => {
      this.users = users
    });

  }

  UserServices = inject(UserService);
  users: User[] = [];
}
