function hydrate(stringDrinks) {
  const cups = stringDrinks
  .split('')
  .reduce((acc, carac) => !isNaN(carac) ? acc + +carac : acc, 0);

  return cups > 1 ? `${cups} copos de água` : '1 copo de água';
};

module.exports = hydrate;