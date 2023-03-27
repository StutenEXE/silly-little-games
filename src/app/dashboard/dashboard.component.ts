import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _user!: User;

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user; 
  }

  constructor(private auth: AuthService, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.auth.updateCurrentUser();
    this.userService.getUser().then(
      data => {
        this.user = data.val();
      }
    );
  }
}
