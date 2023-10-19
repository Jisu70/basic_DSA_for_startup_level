# DSA_for_startup_level

### How to check a string is PALINDROM 
```javascript
function checkPalindrom (str){
  if (str.split('').reverse().join('') === str ) {
    return " It was a palindrom string "
  }else{
    return " String is not palinddrom "
  }
}

console.log(checkPalindrom("lol"))
```

### Find the reapeted element in array 
```javascript
function countOccurence (arr, target) {
  let hash = {} ;
  for (let i = 0; i < arr.length; i++) {
    if(!(arr[i] in hash)){
      hash[arr[i]] = 1
    }else{
      hash[arr[i]]++
    }
  }
  return hash[target]
}

console.log(countOccurence([1,2,3,1,2,4,5,6,4,5,1], 1))
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
```javscript 
function missingNum (arr){
  let n = arr.length + 1 ;
  let sumOfNnumber = n * (n + 1 )/ 2 ;
  let sum = arr.reduce((acc, cur) =>{
    return acc + cur 
  }, 0)
  return `Missing number in the array is ${sumOfNnumber - sum}`
}

console.log(missingNum([1,2,3,4,6]))
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
