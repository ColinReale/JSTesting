// code that will flip a number by first turning it into an array, then reversing it.

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
// console.log(Number(reverse_a_number(12345)));
// code that will sort a string alphabetically

    function sortString(y){
        // turning the initial input into an array of strings
        let arr = y.split('');
        // sorting the array
        let sorted = arr.sort();
        return sorted.join('');
      }
   

  console.log(sortString('polikmjunhytgbvfredcxswza'))

//   a function that will capitalize the first letter in each word in a string

  function uppercase(str)
  {
    //   defining a variable whose value is the input parameter ('str') converted into an array of strings
    let firstArray = str.split(' ');
    // a second variable which will hold all of the new information.
    let secondArray = [];
    //   basically we are going through the strings of the firstArray variable (which is itself an array of strings), 
    // x number of times (until we've gone through it all), locating and pushing the first character of each string (after uppercasing it), 
    // and then slicing off and pushing everything BUT the first letter of each string.
    for(let x = 0; x < firstArray.length; x++){
        secondArray.push(firstArray[x].charAt(0).toUpperCase()+firstArray[x].slice(1));
    }
    return secondArray.join(' ');
  }
  console.log(uppercase("my name is chris carrabba"));
  

// Tests if a number is prime or not

function isThisPrime(c) {
    // makes exceptions for 1 and 2, as they are 'unique' among numbers in that they won't work with this function I've written
if (c==1){
    return false;
} else {
    if (c==2){
        return true;
        // the real function that determines if numbers (other than 1 or 2) are prime. Is the remainder 0 when you divide c by each number between 2 and c? if it never is, then the number is prime, as that means it has no other factors but itself and 1.
    } else {
        for (let d = 2; d < c; d++)
        {
            if (c % d == 0)
            {return false
            }
        }
        return true;
    }
}

}
console.log(isThisPrime(9))


// a function that extracts unique characters from a string

function findUnique(a)
{
 let str=a;
 let uniqueString="";
 for (let i=0;i < str.length;i++)
 {
// returns the first index at which a given element (in this case specified to be each character of the string) can be found in the array. If it returns -1, it is not the first time the element has been found & thus nothing will be returned
 if(uniqueString.indexOf(str.charAt(i))==-1)
  {
  uniqueString += str[i];  
  
   }
  }
  return uniqueString;  
}  
console.log(findUnique("thequickbrownfoxjumpsoverthelazydog"));

function callWhateverIsGiven(L) {
  return L()
};

module.exports.reverse_a_number = reverse_a_number
module.exports.sortString = sortString
module.exports.uppercase = uppercase
module.exports.isThisPrime = isThisPrime
module.exports.findUnique = findUnique
module.exports.callWhateverIsGiven = callWhateverIsGiven