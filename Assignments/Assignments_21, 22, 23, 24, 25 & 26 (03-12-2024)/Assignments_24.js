// Assignments : Implement below Array API methods





// Includes - True or False
const array1 = [10, 20, 35];
console.log(array1.includes(35));

console.log("---------------")



// Slice
const arr1 = [1,2,3,4,5]
console.log(arr1.slice(0,2))
console.log(arr1.slice(-1))
console.log(arr1.slice(-3))
console.log(arr1.slice(-3,-1))

console.log("---------------")




// Splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);

months.splice(1, 2, 'August', 'Sept');
// Replaces 2 element at index 3
console.log(months);

console.log("---------------")





//Copywithin
const arr2 = [1,2,3,4,5,6,7]
// arr2(target,start,end)
console.log(arr2.copyWithin(2,0,3))

const arr3 = [1,2,3,4,5,6,7]
console.log(arr3.copyWithin(2, 1, 2)) //bydefault (target,0,end)

console.log("---------------")



//reverse
const arr4 = [1,2,3,4,5]
console.log(arr4.reverse())

const arr5 = "Veena ma'am is good instructor"
console.log(arr5.split('').reverse().join(''))