export const add = (a: number, b: number) => {
  if (a === 0 && b === 0) {
    throw new Error("0 + 0 is not supported");
  }

  return a + b;
};
