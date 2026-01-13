import type { Game } from "../Game";
import type { GamePhase } from "./GamePhase";
import { MainMenuPhase } from "./MainMenuPhase";

export class CombatPhase implements GamePhase {
   name: string = "Combat Phase";
   game: Game;

   constructor(game: Game) {
      this.game = game;
   }

   enter() {
      const gameState = this.game.getState();
      
      console.log(`Entered ${this.name}.`);
      gameState.currentEnemy = { name: "Goblin", hp: 20 } as any;
      console.log(`Enemy: ${gameState.currentEnemy?.name} HP: ${gameState.currentEnemy?.hp}`);
  }

  handleInput() {
    const gameState = this.game.getState();
    const card = gameState.playerDeck[0];
    // simulate player attacking
    console.log(`Player plays ${card.name} for ${card.dmg} damage`);
    gameState.currentEnemy!.hp -= card.dmg;

    if (gameState.currentEnemy!.hp <= 0) {
      console.log("Enemy defeated! Returning to Main Menu.");
      this.game.setPhase(new MainMenuPhase(this.game));
    } else {
      console.log(`Enemy HP is now ${gameState.currentEnemy!.hp}`);
    }
  }

  exit() {
    const gameState = this.game.getState();
    console.log(`Exiting ${this.name}.`);
    gameState.currentEnemy = null;
  }
}