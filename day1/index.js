const getData = require('../helpers/getData');

const data = getData(1);

const getFuel = mod => Math.floor(mod / 3) - 2;

const solution1 = data
  .map(mod => getFuel(mod))
  .reduce((a, b) => a + b, 0);


const getExtraFuel = mod => {
  const fuel = getFuel(mod);
  if (fuel < 0) {
    return 0;
  }
  return fuel + getExtraFuel(fuel);
};

const solution2 = data
  .map(mod => getExtraFuel(mod))
  .reduce((a, b) => a + b, 0);

console.log('TCL: solution2', solution2);
