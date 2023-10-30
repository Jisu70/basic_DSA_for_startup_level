# DSA_for_startup_level

### How to check a string is PALINDROM

```javascript
function checkPalindrom(str) {
  if (str.split("").reverse().join("") === str) {
    return " It was a palindrom string ";
  } else {
    return " String is not palinddrom ";
  }
}

console.log(checkPalindrom("lol"));
```

### Find the reapeted element in array

```javascript
function countOccurence(arr, target) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hash)) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  return hash[target];
}

console.log(countOccurence([1, 2, 3, 1, 2, 4, 5, 6, 4, 5, 1], 1));
```

```javascript
let arr = [1, 2, 1, 3, 4, 5, 3, 2, 5, 6];

function countDuplicate(arr) {
  let obj = {};
  arr.forEach((a) => {
    if (a in obj) {
      obj[a]++;
    } else {
      obj[a] = 1;
    }
  });
  for (let key in obj) {
    console.log(`${key} is Present ${obj[key]} Times`);
  }
}

console.log(countDuplicate(arr));
```

### Find the factorial of a Number

```javascript
1.Easy approach

function factorial (num){
  let temp = []
  for (let i = num ; i >= 1 ; i--) {
    temp.push(i)
  }
  return temp.reduce((acc, cur) => {
    return acc * cur
  },1)
}
console.log(factorial(5))
```

2.Optimal

```javascript
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
```

### Missing number in Array

```javascript
function missingNum(arr) {
  let n = arr.length + 1;
  let sumOfNnumber = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return `Missing number in the array is ${sumOfNnumber - sum}`;
}

console.log(missingNum([1, 2, 3, 4, 6]));
```

### Make the array unique

```javascript
function removeDuplicates(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = removeDuplicates(arr);

console.log(uniqueArr);
```

### Sum of an array without loop or inbuilt function

```javascript
function calculateSum(arr, index) {
  if (index < 0) {
    return 0;
  }
  return arr[index] + calculateSum(arr, index - 1);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = calculateSum(arr, arr.length - 1);

console.log("The sum of the array is: " + sum);
```

### Find the lowest negative number from an array

```javascript
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let arr = [1, 2, -1, 5, 8, -5, -8];
console.log(findMin(arr));
```

### Find the highest negative number from an array

```javascript
function findMin(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let arr = [1, 2, -1, 5, 8, -5, -8];
console.log(findMin(arr));
```

### Find the lowest negative number from an array

```javascript
function findMin(arr) {
  let min = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] > min) {
      min = arr[i];
    }
  }
  return min;
}
let arr = [1, 2, -1, 5, 8, -5, -8];
console.log(findMin(arr));
```

### maximum sum of a subset of elements in an array

```javascript
function maximumSubset(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

let arr = [1, 2, 3, 4, 5];
console.log(maximumSubset(arr));
```

### Count Vowel in string

```javascript
function countVowel(str) {
  let obj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      counter++;
      obj[str[i]]++;
    }
  }
  for (let key in obj) {
    if (obj[key] !== 0) {
      console.log(`${key} present ${obj[key]} Times`);
    }
  }
  return `Vowel count ${counter}`;
}
```
### Sort array by word count

```javascript
let arr = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

function sortString(arr) {
  return arr.sort((a, b) => b.split(" ").length - a.split(" ").length);
}

console.log(sortString(arr));
```

```javascript
let arr = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
function sortString(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].split(" ").length < arr[j + 1].split(" ").length) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortString(arr));
```

### Decimal to Binary conversion 

```javascript
function decimelToBinary(num) {
    let temp = '';
    while (num > 0) {
        let remainder = num % 2;
        temp += remainder;
        num = Math.floor(num / 2)
    }
    return (temp)
}

console.log(decimelToBinary(10))
```
```javascript
function decimalToBinary (num){
  let result = '' ;
  while(num != 0){
    if(num & 1 === 1 ){
      result += 1 ;
    }else{
      result += 0
    }
    num = num >> 1
  }
  return result ;
}

console.log(decimalToBinary(5))
```

### Binary to Decimal Converter 

```javascript
function binaryToDecimal(binaryStr) {
  let decimal = 0;

  binaryStr = binaryStr.split('').reverse().join('');

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      decimal += Math.pow(2, i);
    }
  }

  return decimal;
}

console.log(binaryToDecimal("1100100")); 
```
### Checking odd or even with Bitwise operator 

```javascript
function checkEvenOdd (num){
   return (num & 1) === 1 ? `${num} is Odd number ` : `${num} is Even number`
}

console.log(checkEvenOdd(10))
```
### Number of 1 Bits
```javascript
var hammingWeight = function (n) {
    let count = 0;
    while (n != 0) {
        let lastBit = n & 1;
        if (lastBit === 1) {
            count++;
        }
        n = n >>> 1;
    }
    return count;
};
```
### Counting Bits

```javascript
var countBits = function(n) {
    let temp = [] ;
    for(let i = 0 ; i <= n ; i++ ){
        let count = hammingWeight(i) ;
        temp.push(count)
    }
    return temp
};
var hammingWeight = function (n) {
    let count = 0;
    while (n != 0) {
        let lastBit = n & 1;
        if (lastBit === 1) {
            count++;
        }
        n = n >>> 1;
    }
    return count;
};
```
### Checking Number Is Prime or Not  
```javascript
function primeNumber (num){
  for (let i = 2  ; i < num ; i++) {
    if( num % i === 0 ){
      return "Number Is not Prime "
    }
  }
  return " This Is a Prime Number "
}

console.log(primeNumber(3))
```
```javascript
// Optimal Solution
function primeNumber (num){
  if(num === 1|| num === 0 ){
    return `${num} is not a prime number`
  }
  for (let i = 2  ; i < Math.sqrt(num) ; i++) {
    if( num % i === 0 ){
      return ` ${num }Is not Prime Number `
    }
  }
  return `${num} Is a Prime Number `
}

console.log(primeNumber(3))
```
Let's say we want to check if 97 is a prime number:
Calculate the square root of 97, which is approximately 9.8496. We'll take the nearest integer square root, which is 9.
Now, let's examine the divisors of 97. If 97 is not a prime number, it can be factored into two numbers, a and b, where a * b = 97. At least one of these factors must be less than or equal to the square root of 97 (9).square root of 97 (9).So thats why we are only going to check th sqrt

