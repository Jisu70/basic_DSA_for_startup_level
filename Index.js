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

console.log(countVowel("hello world"));
