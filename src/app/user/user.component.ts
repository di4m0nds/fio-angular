import { Component } from '@angular/core';
import { DataGame, GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'di4m0nds'
  isLoggedIn = false

  wantsToPlayGameName = ''
  wantsToPlayGameDescription = ''
  wantsToPlayGameImage = ''

  getWantsToPlayGame(game: DataGame) {
    this.clearWantsToPlayGame()

    const { name, description, image } = game

    this.wantsToPlayGameName = name
    this.wantsToPlayGameDescription = description
    this.wantsToPlayGameImage = image
  }

  clearWantsToPlayGame() {
    this.resetVars()
  }

  greet() {
    confirm("HI THERE!")
  }

  private resetVars() {
    this.wantsToPlayGameName = ''
    this.wantsToPlayGameDescription = ''
    this.wantsToPlayGameImage = ''
  }
}
