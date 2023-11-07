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
Factorial Using Recursion 
```javascript
function factorialWithRecursion(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorialWithRecursion(n - 1);
}


console.log(factorialWithRecursion(5))
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

### Find the highest negative number from an array

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

### Find the lowest negative number from an array

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
  let temp = "";
  while (num > 0) {
    let remainder = num % 2;
    temp += remainder;
    num = Math.floor(num / 2);
  }
  return temp;
}

console.log(decimelToBinary(10));
```

```javascript
function decimalToBinary(num) {
  let result = "";
  while (num != 0) {
    if (num & (1 === 1)) {
      result += 1;
    } else {
      result += 0;
    }
    num = num >> 1;
  }
  return result;
}

console.log(decimalToBinary(5));
```

### Binary to Decimal Converter

```javascript
function binaryToDecimal(binaryStr) {
  let decimal = 0;

  binaryStr = binaryStr.split("").reverse().join("");

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === "1") {
      decimal += Math.pow(2, i);
    }
  }

  return decimal;
}

console.log(binaryToDecimal("1100100"));
```

### Checking odd or even with Bitwise operator

```javascript
function checkEvenOdd(num) {
  return (num & 1) === 1 ? `${num} is Odd number ` : `${num} is Even number`;
}

console.log(checkEvenOdd(10));
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
var countBits = function (n) {
  let temp = [];
  for (let i = 0; i <= n; i++) {
    let count = hammingWeight(i);
    temp.push(count);
  }
  return temp;
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
function primeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Number Is not Prime ";
    }
  }
  return " This Is a Prime Number ";
}

console.log(primeNumber(3));
```

```javascript
// Optimal Solution
function primeNumber(num) {
  if (num === 1 || num === 0) {
    return `${num} is not a prime number`;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return ` ${num}Is not Prime Number `;
    }
  }
  return `${num} Is a Prime Number `;
}

console.log(primeNumber(3));
```

Let's say we want to check if 97 is a prime number:
Calculate the square root of 97, which is approximately 9.8496. We'll take the nearest integer square root, which is 9.
Now, let's examine the divisors of 97. If 97 is not a prime number, it can be factored into two numbers, a and b, where a \* b = 97. At least one of these factors must be less than or equal to the square root of 97 (9).square root of 97 (9).So thats why we are only going to check th sqrt

### Two sum

```javascript
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`${arr[i]} + ${arr[j]} is ${target}`);
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 6));
```

```javascript
function twoSum(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (complement in obj) {
      console.log(arr[i], complement);
    }
    obj[arr[i]] = i;
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 6));
```

### If even make it string

```javascript
arr.forEach((a, index) => {
  if (a % 2 === 0) {
    arr[index] = `${a}`;
  }
});

console.log([1, 2, 5, 7, 8, 9, 4]);
```

### common in every element Or longest common prefix

```javascript
let arr = ["flower","flow","flight"];

function commonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1 ; i < arr.length; i++) {
    for (let j = 0 ; j <= arr[i].length; j++) {
      if(prefix[j] !== arr[i][j]){
        prefix = prefix.slice(0, j)
      }
    }
  }
  return prefix;
}

console.log(commonPrefix(arr));
```
### Power of N 
Recursive
```javascript
function powerOfX (x, y){
  if ( y === 1 ){
    return x
  }
  return x * powerOfX(x, y - 1 )
}

console.log(powerOfX(2, 4))
```
Using Loop 
```javascript
function powerOfX (x, y){
  let temp = 1  ;
  for (let i = 1 ; i <= y ; i++) {
    temp *= x
  }
  return temp 
}

console.log(powerOfX(2, 4))

```
### Remove element from an array 
```javascript
function removeEm (arr, target){
    let index = arr.indexOf(target)
    if(index === -1) {return arr}
  for (let i = index ;  i < arr.length - 1 ; i++) {
    arr[i] = arr[i + 1]
  }
  arr.pop()
  return arr
}


console.log(removeEm([1,2,3,4,5,6], 1))
```
### Shuffel the array 
```javascript
let arr = [1,2,3,4,5,6] ;
var shuffle = function(nums, n) {
    let temp = nums.slice(n) ;
    let result = [] ;
    for( let i = 0 ; i < n ; i++){
        result.push(nums[i]) ;
        result.push(temp[i])
    }
    return result ;
};

console.log(shuffle(arr, 3))
```

```javascript
function shuffleItem(arr) {
  let result = [];
  const middle = Math.floor(arr.length / 2);
  for (let i = 0; i < middle; i++) {
    result.push(arr[i]);
    result.push(arr[middle + i]);
  }
  if (arr.length % 2 !== 0) {
    result.push(arr[arr.length - 1]); // Add the last element for odd-length arrays
  }
  return result;
}

console.log(shuffleItem([1, 2, 3, 4, 5, 6, 7]));

```
### Common in Both array 
```javascript
let arr = [1,2,4,5,6] ;

let arr2 =  [6,4,3,1,2] ;

let temp = arr.filter((a) => {
  if (arr2.includes(a)){
    return a ;
  }
}) 

console.log(temp)
```
### Reverse an array 
```javascript
function reverseArray (arr){
  let length = arr.length ;
  for (let i = 0; i < Math.floor(length/2) ; i++) {
    temp = arr[i] ;
    arr[i] = arr[arr.length - 1 - i ] ;
    arr[arr.length - 1 - i ] = temp 
  }
  return arr ;
} 
console.log(reverseArray([1,2,3,4,5]))
```

### If array was unique return false else true 
```javascript
function isDistinct (arr){
  let obj = {} ;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(obj[num]){
      return true
    }
    obj[num] = true
  }
  console.log(obj)
  return false
} 

console.log(isDistinct([1,2,3,4]))
```
### All the Missing nunber from an Array 
```javascript
function findMissing(arr) {
  const numSet = new Set(arr);
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  const missing = [];
  console.log(numSet)
  for (let i = start; i <= end; i++) {
    if (!numSet.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(findMissing([1, 3, 4, 7]));

```
### Find the only missing number in arrray 
```javascript
function findSignleMissingEm (arr) {
 let n = arr.length + 1 ;
 let sumOfNnumber = n * (n + 1)/2 ;
 let sum = arr.reduce((acc, cur) => {
   return acc + cur ;
 }, 0)
 return sumOfNnumber - sum ;
}
console.log(findSignleMissingEm([1,2,3,4,5,7]))
```
### Add to Array-Form of Integer
```javascript
var addToArrayForm = function (arr, k) {
  let carry = 0 ;
  let result = [] ;
  for (let i = arr.length - 1 ; i >= 0 || k > 0 ; i--) {
      let lastOfArr =  i >= 0 ? arr[i] : 0 ; 
    let lastOfK = k % 10 ;
    let sum = lastOfArr + carry + lastOfK ;
    result.unshift(sum % 10) ;
    carry = Math.floor(sum / 10)
    k = Math.floor( k / 10 )
  }
  if( carry > 0 ){
    result.unshift(carry)
  }
  return result
};


console.log(addToArrayForm([2,1,5], 806))
```
