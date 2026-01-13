import type { Game } from "../Game";

export interface GamePhase {
   name: string;
   game: Game;

   enter(): void;
   handleInput(): void;
   exit(): void;
}