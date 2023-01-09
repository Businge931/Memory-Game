export const generateNumbers = (grid: number, max: number) => {
  // const checkForEvenNumber = max % 2 === 0;  //FOR FUTURE USE--expanding the grid

  const numbers = Array.from({ length: (grid * grid) / 2 }, () =>
    Math.floor(max * Math.random())
  );
  const doubleArray = numbers.concat(numbers).sort(() => 0.5 - Math.random());
  return doubleArray;

  //FOR FUTURE USE
  // const checkValidity = checkForEvenNumber && doubleArray;
  // return checkValidity;
};
