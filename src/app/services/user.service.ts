import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 1,
      name: "Uyen",
      address: "VT",
      avatar: "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      role: 1
    },
    {
      id: 2,
      name: "Duc",
      address: "VT",
      avatar: "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      role: 2
    },
    {
      id: 3,
      name: "Lam",
      address: "VT",
      avatar: "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      role: 1
    },
    {
      id: 4,
      name: "Tuyet",
      address: "VT",
      avatar: "https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
      role: 1
    }
  ]

  constructor() {
  }

  getAll() {
    return this.users;
  }

  findIndexById(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  destroy(id) {
    let indexUserDelete = this.findIndexById(id);
    if (indexUserDelete != -1) {
      this.users.splice(indexUserDelete, 1)
    }
  }
}
