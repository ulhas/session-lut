import { Team } from ".";

describe("Teams", () => {
  it("should always exist with 11 players and a coach", () => {
    // Given
    const team = new Team("Finland", "Tom");

    // When
    const playerCount = team.players.length;
    const coach = team.coach;

    // Then
    expect(playerCount).toBe(11);
    expect(coach).toBeDefined();
  });

  it("should exist with a valid coach", () => {
    // Given
    const team = new Team("Finland", "Bob");

    // When
    const coach = team.coach;

    // Then
    expect(coach).toBe("Bob");
  });

  it("should exist with the coach name Tom", () => {
    // Given
    const team = new Team("Finland", "Tom");

    // When
    const coach = team.coach;

    // Then
    expect(coach).toBe("Tom");
  });
});
