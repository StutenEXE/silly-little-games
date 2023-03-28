import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { GameService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {

  games!: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
      }
    }); 
  }

}
