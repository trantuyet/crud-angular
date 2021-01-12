import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  page_title: string = 'Danh sách người dùng';
  isShowImage = 'block';
  users = [

  ]

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.users = this.userService.getAll();
  }

  click() {
    if (this.isShowImage == 'none') {
      this.isShowImage = 'block';
    } else {
      this.isShowImage = 'none';
    }
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
        this.userService.destroy(id);
        this.getAll();
    }
  }

}
