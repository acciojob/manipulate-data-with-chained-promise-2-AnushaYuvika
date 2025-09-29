const output = document.querySelector("#output");

const arr = [1, 2, 3, 4];


function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


new Promise((resolve) => {
  setTimeout(() => resolve(arr), 3000);
})
  .then((data) => {
    const evens = data.filter((num) => num % 2 === 0);

    return delay(1000).then(() => {
      output.textContent = evens; 
      return evens; 
    });
  })
  .then((evens) => {
    const doubled = evens.map((num) => num * 2);

    return delay(2000).then(() => {
      output.textContent = doubled; 
    });
  });
