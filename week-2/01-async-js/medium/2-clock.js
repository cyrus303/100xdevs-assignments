setInterval(() => {
  const hr = formatValues(new Date().getHours());
  const min = formatValues(new Date().getMinutes());
  const sec = formatValues(new Date().getSeconds());

  console.log(`${hr}:${min}:${sec}`);
}, 1000);

const formatValues = (value) => {
  const formattedValue = value < 9 ? '0' + value : value;
  return formattedValue;
};
