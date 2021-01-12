import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {RouterModule, Routes} from "@angular/router";
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
      path: '',
      component: UserListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: ':id/edit',
    component: UserEditComponent
  },
]

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule { }
