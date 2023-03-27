import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-coinflip',
  templateUrl: './coinflip.component.html',
  styleUrls: ['./coinflip.component.scss']
})
export class CoinflipComponent implements OnInit {

  constructor(private userService: UserService, private dashboard: DashboardComponent) { }

  ngOnInit(): void {
  }


  playGame() {
    this.dashboard.user.coins -= 2;
    if(Math.random() < 0.5) {
      this.dashboard.user.coins += 4;
    }
    this.userService.updateCoins(this.dashboard.user.coins);
  }

}
