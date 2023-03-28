export class Game {
    gameName!: string;
    bets!: {
        values: number[],
        custom: boolean
    };
    route!: string;
    description!: string;
    image!: string;
}