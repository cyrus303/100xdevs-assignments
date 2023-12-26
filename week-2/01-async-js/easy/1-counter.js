const timer = () => {
  console.log(`timer ${count++}`);
};
let count = 0;
setInterval(timer, 1000);
