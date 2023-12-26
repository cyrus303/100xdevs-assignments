const timer = () => {
  console.log(`timer: ${count++}`);
  setTimeout(timer, 1000);
};

let count = 0;

timer();
