import { add } from ".";

test("2 + 3 returns 5", () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(5);
});

test("-1 + 4 returns 3", () => {
  // Given
  const a = -1;
  const b = 4;

  // When
  const result = add(a, b);

  // Then
  expect(result).toBe(3);
});

test("0 + 0 returns 0", () => {
  // Given
  const a = 0;
  const b = 0;

  // When
  expect(() => add(a, b)).toThrow("0 + 0 is not supported");
});
