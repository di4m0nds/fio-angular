import { Component, EventEmitter, Input, Output } from '@angular/core';
import { allGames } from './games';

export interface DataGame {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h5>Fav games of <span>{{ username }}</span></h5>
    <ul>
      @for (game of games; track game.id) {
        <li
          (click)="wantsToPlay(game.id)"
        >
          <strong>#{{ game.id }}</strong> - {{ game.name }}
        </li>
      }
    </ul>
  `,
  styles: `
    ul { width: 200px }
    li { font-size: 18px; text-decoration: none; cursor: pointer; }
    li:hover { font-weight: 500 }
    h5 {
      font-weight: 500
    }
  `
})
export class GamesComponent {
  @Input() username: string = ''
  @Output() wantsToPlayEvent = new EventEmitter<DataGame>()

  games: Array<DataGame> = allGames;

  wantsToPlay(gameID: number) {
    for (let game of this.games) {
      if (game.id === gameID) {
        const data: DataGame = { id: game.id, name: game.name, description: game.description, image: game.image }
        this.wantsToPlayEvent.emit(data)
        return;
      }
    }

    alert('Game not found.')
  }
}
