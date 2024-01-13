for(let i=0;i<100;i++)

    console.log(`hello nasrullah ${i}`);
    
// for (let i = 0; i < 100; i++) {
//     for (let k = 100; k < 200; k++) {
//         if (i % 2 === 0) {
//             console.log(`The number is: ${i} and its multiples are: ${i * k}, ${i * k + 1}`);
//         } else {
//             console.log(`This number is not even`);
//         }
//     }
// }

let k = "Nasr khalil";
let characters = k.split('');

characters.forEach(i => {
    console.log(i);
});

let nums= Math.random()*10;
console.log(nums)

let numzz=[2,3,4,5,6];
for(let i of numzz){
    console.log(i**i)
}

const numbers = [1, 2, 3, 4, 5];

const modifiedNumbers = numbers.map((number) => {
  if (number % 2 === 0) {
    return number * 2;
  } else {
    return number;
  }
});

console.log(modifiedNumbers);


const numbers2 = [1, 2, 3, 4, 5];
numbers.forEach(numk => {
    console.log(numk)
});

// forOf
const numbers3 = [11, 21, 31, 41, 51];
for (const j of numbers3) {
    console.log(j)
}

let arr1 = {
    l: [100, 200, 300],
    10: 'hello',
    20: 'world'
};

console.log(arr1['l']); // Accessing the 'l' property of arr1

console.log(arr1.l[0]); // Accessing the first element of the 'l' array
