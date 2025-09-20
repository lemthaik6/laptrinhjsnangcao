//Hàm khai báo
function hamKhaiBao() {}
// Arrow function
//Nếu hàm mũi tên nhận hcinhs xác 1 tham số thì có thể lược ngoặc tròn
// var hamMuiTen = notice =>{
//     alert(notice)

// }
// hamMuiTen("Hàm mũi tên đã được gọi")
//Khi hàm mùi tên trả về đúng 1 giá trị
// var tinhTong = (a,b) => ({ten : a, tuoi : b})
// console.log(tinhTong(4,5))
// var dangNhap = (ten = "bạn")=>{
//     alert("Xin chào "+ ten)
// }
// dangNhap("Minh")
//Spread
// var arr = [1,2,3]
// var arr1 = [4,5,6]
// var arr2 = [...arr,...arr1]
// var [a,,b,...rest] = arr2
// console.log(a,b,rest)

// console.log(arr2)
// var diemTB = 8.5
// var danhHieu
// // if(diem >= 9)
// // {
// //     danhHieu = 'Ong vàng'
// // }
// // else if ( diem< 9 && diem > 8)
// // {
// //     danhHieu = "Học sinh giỏi"
// // }
// danhHieu = diemTB >= 9 ? "Ong vàng" : diemTB >= 8 ?"học sinh giỏi" :"Học sinh khá"
// alert(danhHieu)
var giangVien = {
  ten: "Minh",
  gioiThieu(loiChao, dauCau) {
    alert(loiChao + this.ten + dauCau);
  },
};
var gioiThieu = giangVien.gioiThieu;
var giangVienGioiThieu = gioiThieu.bind(giangVien);
giangVienGioiThieu("xin chào", "!!!!!");
