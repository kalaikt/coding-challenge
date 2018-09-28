import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../interface/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();

    if (!this.user) {
      this.goBack();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
