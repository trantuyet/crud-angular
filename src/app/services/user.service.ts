import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 1,
      name: 'Uyen',
      address: 'VT',
      avatar: 'https://64.media.tumblr.com/9374b35176f5002120fc764be3a2083b/fcfed684970f3971-51/s250x400/02d3615a8af821fa4cb739f68e582a1b04801ee5.png',
      role: 1
    },
    {
      id: 2,
      name: 'Duc',
      address: 'VT',
      avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      role: 2
    },
    {
      id: 3,
      name: 'Lam',
      address: 'VT',
      avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      role: 1
    },
    {
      id: 4,
      name: 'Tuyet',
      address: 'VT',
      avatar: 'https://64.media.tumblr.com/9374b35176f5002120fc764be3a2083b/fcfed684970f3971-51/s250x400/02d3615a8af821fa4cb739f68e582a1b04801ee5.png',
      role: 1
    }
  ];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.users;
  }

  // tslint:disable-next-line:typedef
  findIndexById(id) {
    for (let i = 0; i < this.users.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.users[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  // tslint:disable-next-line:typedef
  destroy(id) {
    const indexUserDelete = this.findIndexById(id);
    // tslint:disable-next-line:triple-equals
    if (indexUserDelete != -1) {
      this.users.splice(indexUserDelete, 1);
    }
  }
}
