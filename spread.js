// let o1  = {
//     key1: 1,
//     key2: 2,
// };

// let o2 = {
//     key3: 3,
//     key4: 4,
//     ...o1,
// };

// console.log(o2);

//Slice
// let a = [4, 5, 6, 7];

// console.log(a.slice(1, 3));

// console.log(a.slice(2));

// let a = [4, 8, 7, 9, 12, 13, 16];
// let b = [...a.slice(0,3), 3, ...a.slice(3)];
// let b = []

// for(let i = 0; i < 3; i++){
//     b[i]=a[i];
// }

// b[3] = 3;

// for(let i = 3; i < a.length; i++){
//     b[i + 1 ] = a[i];
// }

// console.log(a);
// console.log(b);

//Destructring
// array and objects me se value nikalke ek naye variable main dal daal deta hai

//Array
// let a = ["Ram", "Shyam", "Dhyam"];
// let [b,,c] = a

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let a = {
//     x: "alpha",
//     y:"beta",
// };

// let {x} = a

// console.log(a);
// console.log(x);

let a =  {
    x : {
        z: "gamma",
    },
    y: "beta", 
};

let {
    x : {z},
} = a;

console.log(a);
console.log(z);
