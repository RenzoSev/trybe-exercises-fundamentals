const getArr = () => {
  return Array.from({ length: 10 }, () => Math.round(Math.random() * 51) ** 2);
};

const createPromise = async () => {
  const arr = getArr();
  const sum = arr.reduce((acc, cur) => acc + cur);
  if (sum < 8000) return sum;
  else throw new Error();
};

const getSum = (sum) => {
  const arr = [2, 3, 5, 10];
  return arr.map((num) => (sum / num).toFixed(2));
};

const getPromise = async () => {
  try {
    const sum = await createPromise();
    const result = getSum(sum);
    console.log(result);
  } catch (error) {
    console.log('É mais de oito mil!!');
  }
};

getPromise();
