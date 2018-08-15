'use strict'
const sum = (a, b) => new Promise((resolve, reject) => {
  const numb1 = parseInt(a);
  const numb2 = parseInt(b);
  setTimeout(
    () => {
      typeof numb1 === 'number' && typeof numb2 === 'number' ? resolve(numb1 + numb2) : reject('arguments no valid');  
    },
    2000
  )
});

module.exports = sum;