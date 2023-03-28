import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as data from 'src/assets/games.json';
import { Game } from "../models/game";

@Injectable({
    providedIn: "root"
})
export class GameService {
    private games: Game[] = (data as any).default;

    getGames(): Observable<Game[]> {
        return of(this.games);
    }

    
    getGame(gameName: string): Observable<Game | undefined> {
        let game = this.games.find(game => game.gameName === gameName);
        return of(this.games.find(game => game.gameName === gameName));
    }
}