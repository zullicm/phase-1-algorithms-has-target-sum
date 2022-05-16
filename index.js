function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    //n steps
    for(let j = i + 1; j < array.length; j++){
      //n * n steps
      if (array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  The goal is to write a function that takes an array of numbers, and a target number as 
  the second argument. And if the array of numbers has a PAIR (meaning two,
  if three numbers equal it doesnt count) of numbers that can equal the target number
*/

/*
  I would like to start of by saying this feels like it would maybe be the wrong
  solution but it works and thats good for me at this moment.

  I first start of by realizing how closley this problem was to the one listed on
  the page previous to this lab(the one where you look for matching sock pairs).
  In that one you have to loop through each pair giving one sock a variable and
  another sock another and seeing if they match. In this you also have to loop through 
  and assign each sock a variable but this time instead of seeing if they match each
  other, you check to see if they add up to the target.

  This is where I feel may code starts to stray.

  In my if statment it checks if the two variables in the array add up to the
  target and if they do then it returns true. But being that assing an else statement 
  with a return of false would end the loop I had to exclude that. The next issue was odd
  but simple that being how to return a false if they dont match. This function
  at the moment of describing it would actually return nothing at all if it were fed an
  array that didnt have a sum target match. So I just added a return flase to the end
  of the function and the part I dont like much about this is that it always returns
  as a function. All of this in itself could be the right thing but it feels wrong.
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
