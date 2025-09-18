// var Minh = {
//     name: "Minh",
//     age: 21,
//     address: "Hà Nội",
// }
// console.log(Minh["name"]);
// console.log(Minh.name);

// //DOM
// //Lấy 1 thẻ dùng document.getElementById()
// //lấy nhiều thẻ dùng ducument.querySelectorAll()
// document.getElementById("target").innerText = "Hello World";
// document.getElementById("target").innerHTML = "<b>Hello World</b>";

// //Hàm khai báo
// function tinhTong(){
//     var a=5;
//   alert(1 + 1);
//   console.log(a);
// }
// tinhTong();
// console.log(a); //Lỗi vì a là biến cục bộ trong hàm

// //hàm biểu thức là hàm ẩn danh được gán với 1 biến
// var hamBieuThuc = function(){
//     alert("Hàm biểu thức");
// }
// hamBieuThuc();

//Hàm mũi tên (arrow function)
// var hammuiten = ()=>{
//     alert("Hàm mũi tên");
//     return "Hàm mũi tên";
// }
// var hammuiten = hammuiten();
// console.log(hammuiten);

//IIFE
// (()=>{
//     alert("Hàm tự gọi IIFE");
// })();

// //Hàm có tham số
// function tinhTong(a,b){
//     alert(a + b);
// }
// tinhTong(5,10);


//call back function
// function greeting(ten){
//     alert("Xin chào " + ten);
// }

// function dangnhap(callback){
//     var ten = prompt("Nhập tên");
//     callback(ten);
// }
// dangnhap(greeting);

var products = [
    {id:1, name:"Iphone 14", price:2000, brand: "Apple"},
    {id:2, name:"Samsung S22", price:1500, brand: "Samsung"},
    {id:3, name:"Xiaomi 12", price:1000, brand: "Xiaomi"},
    {id:4, name:"Oppo Find X5", price:1200, brand: "Oppo"},
    {id:5, name:"Nokia X30", price:800, brand: "Nokia"},
]
function render(arr){
    let renderstring = `
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
            </tr>
    `;
    for(let i=0; i<arr.length; i++){
        renderstring += `
            <tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].price}</td>
                <td>${arr[i].brand}</td>
            </tr>
        `;
    }
    renderstring += `</table>`;
    document.getElementById("product-list").innerHTML = renderstring;
}