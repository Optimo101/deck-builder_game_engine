// MainMenuPhase.ts
import type { Game } from "../Game";
import type { GamePhase } from "./GamePhase";
import { StoryPhase } from "./StoryPhase"

export class MainMenuPhase implements GamePhase {
   name: string = "Main Menu Phase";
   game: Game;
   
   constructor(game: Game) {
      this.game = game;
   }

   enter() {
      console.log(`Entered ${this.name}.`)
      console.log("Options: [1] Start Game");
   };

   handleInput() {
      const choice = 1; // simulate player choosing start
      console.log("Player selected Start Game");
      this.game.setPhase(new StoryPhase(this.game));
   };

   exit() {
      console.log(`Exiting ${this.name}.`)
   };
}