import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.listAll();
  }

  listAll() {
    this.userService.listAll().subscribe((response) => {
      this.users = response;
    });
  }
}
