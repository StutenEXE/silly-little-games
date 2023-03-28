import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game!: Game;
  readonly GAME_NAME!: string;
  error: string = '';
  
  constructor(private route: Router,
    private gameService: GameService) { 
      if (this.route.url.split("/")[3] === undefined){
        return;
      }
      this.GAME_NAME = this.route.url.split("/")[3];

  }

  ngOnInit(): void {
    if (this.GAME_NAME === undefined) {
      this.error = "No game selected";
      return;
    }
    this.gameService.getGame(this.GAME_NAME).subscribe({
      next: (game) => {
        if (game === undefined) {
          this.error = "Game not found";
        }
        else {
          this.game = game;
        }
      }
    });
  }

}
