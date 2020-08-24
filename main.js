'use strict'

// 1.display in the console the numbers from 1 to 20

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

//2.display in the console the odd numbers from 1 to 20
console.log('2.display in the console the odd numbers from 1 to 20')


for (let i = 1; i<20; i++) {
    if ( i % 2 === 1) {
        console.log(i);
    }
}

// 3.compute the sum of the elements of an array and display it in the console
console.log('3.compute the sum of the elements of an array and display it in the console')

var array = [2044, 777, 120, 1500, 1115, 442, 825, 1505];
var sum = array.reduce(function(a, b){
return a + b; }, 0);
console. log(sum); 



// 4.compute the maximum of the elements of an array and display it in the console 
console.log('4.compute the maximum of the elements of an array and display it in the console')

function maxOfArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    
    return max;
}
let myArr = [5204, 22457, 152522, 3335550, 1121115, 445559, 85353, 1105];
console.log(maxOfArr(myArr));

// 5. compute how many times a certain element appears in an array   
console.log('5. compute how many times a certain element appears in an array  ')

let array = [100, 2, 3, 5, 8, 9, 100, 2, 80, 100, 84, 100, 56, 100 , 3, 2, 100, 100, 100, 22, 100, 62, 1000, 2, 52, 4, 100, 100];
let counts = {};

for (let i = 0; i < array.length; i++) {
    let num = array[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log("Number 100 appears " + counts[100] + " times");

// Challenge Nested
console.log('Challenge Nested')

let a = new Array(4);
for (let i = 0; i < 4; i++) {
    a[i] = new Array(4);
    for (let j =0; j < 4; j++){
       if ((i % 2 == 0) && (j % 2 == 0)){
           a[i][j] = 0;
        } else { 
            if ((i % 2 == 1) && (j % 2 == 1)) {
                a[i][j] = 0;
            } else {
                    a[i][j] = 1;
                   }
       }
    }
}
console.log(a);


// Lazy way

var a = [1,2,3,1,2,3,4];
var map = a.reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});


let pattern = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    
];
console.log(pattern);


