const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const fs = require('fs');
let outputFileStream = fs.createWriteStream('logConsoleFile.log', { 'flags': 'a' });
const originalWrite = process.stdout.write;
process.stdout.write = function () {
  originalWrite.apply(process.stdout, arguments);
  outputFileStream.write.apply(outputFileStream, arguments);
};

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);

  const isPrime = number => {
    for (let i = 2; i < number; i++)
      if (number % i === 0) return false;
    return true;
  }

  const numbersArray = new Array(500);

  for (var i = 0; i < 500; i++) {
    numbersArray[i] = i + 1;
  }

  for (var i = 0; i < numbersArray.length; i++) {
    // Divisible by 3
    if (numbersArray[i] % 3 == 0) {
      console.log(`${numbersArray[i]} FIZZ`);
    } else if (numbersArray[i] % 5 == 0) {
      console.log(`${numbersArray[i]} BUZZ`);
    } else if (numbersArray[i] % 3 == 0 && numbersArray[i] % 5 == 0) {
      console.log(`${numbersArray[i]} FIZZBUZZ`);
    } else if (isPrime(numbersArray[i])) {
      console.log(`${numbersArray[i]} FIZZBUZZ ++`);
    } else {
      console.log(numbersArray[i]);
    }
  }



});



