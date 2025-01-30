let palindrome = 'racecar'


const palindromeChecker =  (str) =>{
  let leftIndex = 0
  let rightIndex = str.length-1


  while(leftIndex < str.length/2){
    if (str[leftIndex] != str[rightIndex]) {
        return false
    }
    leftIndex++
    rightIndex--
  }
  return true
}

console.log(palindromeChecker(palindrome));
