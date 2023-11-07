/** product: calculate the product of an array of numbers. */

//base case: product([]) => 1

function product(nums) {
  if(nums.length === 0){
    return 1;
  }

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

//base case: [] => 0

// ["hi", "hello", "hola"] => 5
// ['hello'] => 5
// [] => 0

function longest(words) {
  if(words.length === 0){
    return 0;
  }

  if (words[0].length > longest(words.slice(1))){
    return words[0].length;
  }
  else{
    return longest(words.slice(1));
  }
}

/** everyOther: return a string with every other letter. */

//base case: empty str

//"hello" => "hlo"
// h + llo
// llo => l + o
// o => o + ""

//"hlo"

function everyOther(str) {
  if(str.length === 0){
    return "";
  }

  return str[0] + everyOther(str.slice(2))

}

/** find: return boolean depending on if val exists in array or not. */
//base case: [] => false

function find(arr, val) {
  if (arr.length === 0){
    return false;
  }

  return arr[0] === val ? true : find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
//base case: '' -> true

//noon => n = n? true => isPalindrome(oo)


function isPalindrome(str) {
  if (str === ""){
    return true;
  }

  if (str[0] === str[str.length - 1]){
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

/** revString: return a copy of a string, but in reverse. */
//base: empty string

function revString(str) {
  if (str.length === 0){
    return str;
  }

  return revString(str.slice(1)) + str[0];

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
//base: [] => -1

function findIndex(arr, val) {
  if (arr.length === 0){
    return -1;
  }

  if (arr[0] === val){
    return 0;
  } else {
    return findIndex(arr.slice(1), val) + 1 || -1;
  }

}

/** gatherStrings: given an object, return an array of all of the string values. */

//base case: kv pair: val is a string => [string]

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj){
    if (typeof(obj[key]) === "string"){
      strings.push(obj[key]);
    } else {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

//base case: [] => false

//[1,2,3], 1 => true
//[1,2,3], 5 => false

//[1,2,3] left = 0, right = 3
//midpoint = 1
// arr[1] = 2 => not 5
// 2 < 5

//bsearch(arr, 5, 1, 3)
//midpoint = 1 + 3/2 = 2
//arr[2] = 3
// 3 != 5, no true
//3 < 5

//bsearch(arr, 5, 2, 3)
//midpoint = 2+3/2 = 2.5 => 2

function binarySearch(arr, val) {
  // if(left >= right){
  //   return false;
  // }

  // let midPointIndex = Math.ceil(right / 2)
  // if(arr[midPointIndex] === val){
  //   return true;
  // }

  // if(arr[midPointIndex] > val){
  //   return binarySearch(arr, val, left = 0, right = midPointIndex);
  // }
  // else if(arr[midPointIndex] <= val){
  //   return binarySearch(arr, val, left = midPointIndex, right = arr.length);
  // }

  if (arr.length === 0){
    return false;
  }

  let midPointIndex = Math.floor(arr.length/2)

  if (arr[midPointIndex] === val){
    return true;
  }

  if (arr[midPointIndex] > val){
    return binarySearch(arr.slice(0, midPointIndex), val);
  } else {
    return binarySearch(arr.slice(midPointIndex + 1, arr.length), val);
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

//[1], 3
// left = 0, right = 1
// MPI = 0
// left = 1, right = 1
// MPI = 1

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  if (left > right){
    return -1;
  }

  let midPointIndex = Math.floor((left + right)/2)

  if (arr[midPointIndex] === val){
    return midPointIndex;
  }

  if (arr[midPointIndex] > val){
    return binarySearchIndex(arr, val, left, midPointIndex - 1);
  } else {
    return binarySearchIndex(arr, val, midPointIndex + 1, right);
  }

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
