export const generateNumbers = (max: number) => {
  const numbers = Array.from({ length: max }, () =>
    Math.floor(20 * Math.random())
  );

  console.log(numbers);
};
