/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * initialize an array with the values 1 2 3 to the var one
 *  initialize an array with the values 4 5 6 to the var two
 * concat and console log
 */

var one = [1,2,3];
var two = [4,5,6];
console.log(one.concat(two));




/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 *  create a variable numbers and create a 2 by 4 array with the following values:
 * Pizza, Fries, Bhicken Strips, Burger
 * Boke, Bepsi, Root Beer, Water 
 * call the value by array values and console log the sentence using concatenation "I enjoy eating Bhicken Strips and drinking Bepsi for dinner"
 */

var numbers = [
  ["Pizza", "Fries", "Bhicken Strips", "Burger"],
  ["Boke", "Bepsi", "Root Beer", "Water"]
]
console.log("I enjoy eating " + numbers[0][2] + " and drinking " + numbers[1][1] + " for dinner.");

