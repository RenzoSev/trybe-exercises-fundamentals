const getArr = () => {
  const arr = [];
  for (let index = 0; index < 10; index += 1) {
    arr.push(Math.round(Math.random() * 51) ** 2);
  }
  return arr;
};

const thePromise = new Promise((resolve, reject) => {
  const arr = getArr();
  const under8000 = arr.reduce((acc, cur) => acc + cur) < 8000;
  under8000 ? resolve('Promise resolvida!') : reject('Promise rejeitada');
})
.then(msg => console.log(msg))
.catch(err => console.log(err));
