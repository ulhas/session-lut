import { Player } from ".";

describe("Players", () => {
  it("should return correct full name", () => {
    // Given
    const player = new Player("John", "Doe", "Finland");

    // When
    const fullName = player.fullName();

    // Then
    expect(fullName).toBe("John Doe");
  });

  it("should return true for foreinger if the country is USA", () => {
    // Given
    const player = new Player("John", "Doe", "USA");

    // When
    const isForeign = player.isAForeignPlayer();

    // Then
    expect(isForeign).toBe(true);
  });
});
