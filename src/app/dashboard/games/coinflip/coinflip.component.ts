import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { Game } from 'src/app/shared/models/game';
import { GameService } from 'src/app/shared/services/games.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-coinflip',
  templateUrl: './coinflip.component.html',
  styleUrls: ['./coinflip.component.scss']
})
export class CoinflipComponent implements OnInit {

  readonly GAME_NAME = "coinflip";

  coinFlipGame!: Game;
  error: string = '';
  bet: number = 2;

  constructor(private userService: UserService,
    private gameService: GameService,
    protected dashboard: DashboardComponent) { }

  ngOnInit(): void {
    this.gameService.getGame(this.GAME_NAME).subscribe({
      next: (game) => {
        if (game === undefined) {
          this.error = "Game not found";
        }
        else {
          this.coinFlipGame = game;
        }
      }
    });
  }

  playGame() {
    if (this.betIsInvalid()) {
      return;
    }
    this.error = "";
    this.dashboard.user.coins -= this.bet;
    if (Math.random() < 0.5) {
      this.dashboard.user.coins += this.bet * 2;
    }
    this.userService.updateCoins(this.dashboard.user.coins);
  }

  setBetButton(bet: number, event: Event) {
    this.bet = bet;
  }

  setBetInput(event: any) {
    this.bet = event.target.value;
  }

  betIsInvalid() {
    if (this.dashboard.user === undefined || this.dashboard.user === null) {
      this.error = "Wait for game to load";
      return true;
    }
    if (this.bet < this.coinFlipGame.bets.values[0]) {
      this.error = "The minimum bet is " + this.coinFlipGame.bets.values[0];
      return true;
    } 
    if(this.bet > this.dashboard.user.coins) {
      this.error = "You can't bet what you don't have";
      return true;
    }
    return false;
  }
}

