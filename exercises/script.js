const getArr = () => {
  return Array.from({ length: 10 }, () => Math.round(Math.random() * 51) ** 2);
};

const createPromise = () => {
  return new Promise((resolve, reject) => {
    const arr = getArr();
    const sum = arr.reduce((acc, cur) => acc + cur);
    sum < 8000 ? resolve(sum) : reject();
  });
};

const getPromise = () => {
  createPromise()
    .then((sum) => [2, 3, 5, 10].map((num) => (sum / num).toFixed(2)))
    .then((result) => console.log(result))
    .catch(() => console.log("É mais de oito mil!"));
};

getPromise();
