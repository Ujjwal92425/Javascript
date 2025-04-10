//✅ Q1: Reverse a String
let s1 = "hello";
let s2 = "";

for (let i = s1.length - 1; i >= 0; i--) {
  s2 += s1[i];
}

console.log(s2);

//Count Vowels in a String
let s = "education";
let count = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
    count++;
  }
}
console.log(count);

//✅ Q3: Check if String is Palindrome
s3 = "madam";
let n = s3.length - 1;
let a = true;
for (let i = 0; i < s3.length / 2; i++) {
  if (s3[i] != s3[n - i]) {
    a = false;
    break;
  }
}
console.log(a);

//✅ Q4: Capitalize First Letter of Each Word
function Capitalize(s4) {
  s4 = s4.trim();
  let s42 = s4.split(" ");
  for (let i = 0; i < s42.length; i++) {
    s42[i] = s42[i].charAt(0).toUpperCase() + s42[i].slice(1);
  }
  console.log(s42.join(" "));
}
Capitalize("hello world");

//✅ Q5: Find Duplicate Characters in a String
function findDuplicates(str) {
  let freq = {};
  let result = [];
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] > 1) {
      result.push(key);
    }
  }
  console.log(result);
}
findDuplicates("programming"); // Output: ['r', 'g', 'm']

//✅ Q6: Compress a String (Basic)
//📥 Input: "aaabbccc"
//📤 Output: "a3b2c3"
function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  console.log(result);
}
compressString("aaabbccc"); // Output: a3b2c3

//✅ Q7: Remove All Whitespaces
//📥 Input: " hello world "
//📤 Output: "helloworld"
function removeWhiteSpace(str) {
  let result = str.replace(/\s/g, "");
  console.log(result);
}
removeWhiteSpace("  hello   world "); // Output: "helloworld"
removeWhiteSpace("  hello world");


//✅ Q8: Check if Two Strings are Anagrams
//📥 Input: "listen", "silent"
//📤 Output: true


function isAnagrams(a1, a2) {
    let s1 = a1.split('').sort().join('');
    let s2 = a2.split('').sort().join('');
    console.log(s1 === s2);
  }
  isAnagrams("listen", "silent"); // true
  
