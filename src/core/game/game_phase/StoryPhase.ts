import type { Game } from "../Game";
import { CombatPhase } from "./CombatPhase";
import type { GamePhase } from "./GamePhase";

export class StoryPhase implements GamePhase {
   name: string = "Story Phase";
   game: Game;
   
   constructor(game: Game) {
      this.game = game;
   }

    enter() {
      console.log(`Entered ${this.name}.`);
      console.log("You enter a dark cave...");
   }

   handleInput() {
      const choice = 1; // simulate player choosing to continue
      console.log("Player continues to combat");
      this.game.setPhase(new CombatPhase(this.game));
   }

   exit() {
      console.log(`Exiting ${this.name}.`);
   }
}