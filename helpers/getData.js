const fs = require('fs');
const path = require('path');

module.exports = (day) => {
  const file = fs.readFileSync(path.resolve(__dirname, `../day${day}/data.txt`));
  const data = file.toString().split(/\n/g).map(Number);
  data.pop();
  return data;
}
