// const sum = (a) => (b) => a + b;

// console.log(sum(1)(2));

const test = () => {
  let count = 0;
  const test2 = () => {
    count++;
    console.log(count);
  };

  return test2;
};

const tg = test;

tg()();
tg()();
tg()();

// console.log(tg());
