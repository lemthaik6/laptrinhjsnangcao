// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

//khai bao mang 
let arr1 = [1,2,3,4,5];
var arr2 = new Array(6,7,8,9,10);
// console.log(arr1.length);
// console.log(arr2);

// //index :
// console.log(arr1[0]);

// //duyet mang
// console.log(arr2[arr2.length - 1]);
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

//splice

arr1.splice(2,0,100,200,300);
console.log(arr1); //ket qua [1, 2, 100, 200, 300, 3, 4, 5]
// xoa phan tu tai phan tu thu 2 va them 3 phan tu 100,200,300

arr2.splice(4,2);
console.log(arr2); //ket qua [1, 2, 100, 200, 5]
// xoa 2 phan tu tu vi tri thu 4

