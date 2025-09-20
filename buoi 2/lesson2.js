// // var Minh = {
// //   ten: "Minh",
// //   tuoi: 25,
// //   gioiTinh: "Nam",
// //   "/": "https:localhost:3000",
// // };
// // // console.log(Minh."/");
// // console.log(Minh["/"]);

// // //DOM
// // //Lấy 1 thẻ : getElementById()
// // //Lấy nhiều thẻ : querySelector()
// // document.getElementById("target").innerHTML =
// //   "<div>Đây là dòng text được tạo ra bởi JS</div>";

// //Hàm
// //Hàm không thực thi khi được định nghĩa, nó thực thi khi được gọi
// //Hàm sẽ có function scope

// //Loại hàm
// //Hàm khai báo
// // function tinhTong() {
// //   var a = 5;
// //   alert(4 + 3);
// //   console.log(a);
// // }
// // tinhTong();
// // console.log(a);

// //Hàm biểu thức là hàm ẩn danh được gán với 1 biến

// // var hamBieuThuc = function () {
// //   alert("Hàm biểu thức đã được gọi");
// // };
// // hamBieuThuc();

// // var hamMuiTen = () => {
// //   alert("Hàm mũi tên đã được gọi");
// //   return "Đây là một chuỗi được trả về bởi hàm";
// // };
// // var result = hamMuiTen();
// // console.log(result);
// //   //IIFE
// //   () => {
// //     alert("Hàm IIFE đã được gọi");
// //   }
// // )();
// // function tinhTong(a, b) {
// //   alert(a + b);
// // }
// // tinhTong(3, 4);
// // tinhTong(5, 7);
// // function greeting(ten) {
// //   alert("xin chào " + ten);
// // }
// // function dangNhap(callback) {
// //   var ten = "Minh";
// //   callback(ten);
// // }
// // dangNhap(greeting);

var products = [
  {
    ten: "Iphone 17 promax 2TB",
    gia: "nửa quả thận",
    xuatXu: "Trung Xuất",
    tinhTrang: "Còn hàng",
  },
  {
    ten: "Samsung Galaxy Z Fold 7",
    gia: "1 quả thận",
    xuatXu: "Hàn Nấu",
    tinhTrang: "Hết hàng",
  },
  {
    ten: "Xiaomi 15 Ultra",
    gia: "vài tháng lương",
    xuatXu: "Trung Quốc",
    tinhTrang: "Còn hàng",
  },
  {
    ten: "Google Pixel 10 Pro",
    gia: "một cục vàng",
    xuatXu: "Mỹ Tho",
    tinhTrang: "Còn hàng",
  },
  {
    ten: "Nokia 3310 Pro Max",
    gia: "một bát phở",
    xuatXu: "Phần Lan",
    tinhTrang: "Còn hàng",
  },
];
function render(arr = []) {
  var renderString = "";
  for (let i = 0; i < arr.length; i++) {
    renderString =
      renderString +
      `<tr class="item">
          <td class="item">${arr[i].ten}</td>
          <td class="item">${arr[i].gia}</td>
          <td class="item">${arr[i].xuatXu}</td>
          ${
            arr[i].tinhTrang === "Còn hàng"
              ? `<td class="item" style="background-color: green;">${arr[i].tinhTrang}</td>`
              : `<td class="item" style="background-color: red;">${arr[i].tinhTrang}</td>`
          }
          <td><button onclick="xoa(${i})">Xóa</button></td>
        </tr>`;
  }
  console.log(renderString);
  document.getElementById("target").innerHTML = renderString;
}
render(products);
function xoa(ahihi) {
  if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm không")) {
    products.splice(ahihi, 1);
    render(products);
  }
}
function themSP() {
  var tenSP = prompt("Nhập tên SP");
  var giaSP = prompt("Nhập giá SP");
  var xuatXuSP = prompt("Nhập xuất xứ SP");
  if (!isNaN(Number(giaSP))) {
    var data = { ten: tenSP, gia: giaSP, xuatXu: xuatXuSP };
    console.log(data);
    products.push(data);
    render(products);
  } else {
    alert("Giá sp phải là số");
  }
}
