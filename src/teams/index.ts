import { Player } from "../players";

export class Team {
  public readonly players: Player[] = [];
  public readonly coach: string;

  constructor(name: string, coach: string) {
    for (let i = 0; i < 11; i++) {
      this.players.push(new Player("John", "Doe", "Finland"));
    }
    this.coach = coach;
  }

  public playerCount() {
    return this.players.length;
  }
}
