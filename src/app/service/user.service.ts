import { Injectable } from '@angular/core';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  constructor() { }

  public  addUser(user: User) {
    this.user = user;
  }

  public  getUser() {
    return this.user;
  }
}
