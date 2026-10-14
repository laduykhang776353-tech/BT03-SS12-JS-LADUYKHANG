// // Bảng so sánh kỹ thuật
// // Tiêu chuẩn	              Monolithic Switch-Case	                      Modular Function Architecture
// // Cấu trúc code	     Toàn bộ logic nằm trong switch-case	         Chia thành các hàm riêng biệt
// // Độ dài switch	     Dài, khó đọc khi có nhiều chức năng	         Ngắn, mỗi case gọi một hàm
// // Bảo trì	             Khó sửa, dễ ảnh hưởng chức năng khác	         Dễ sửa từng hàm độc lập
// // Tái sử dụng	         Thấp, logic phụ thuộc vào menu	                 Cao, hàm có thể dùng ở nhiều nơi
// // Unit Test	         Khó kiểm thử riêng từng chức năng	             Dễ kiểm thử từng hàm
// // Khả năng mở rộng	     Khó quản lý khi tăng từ 5 lên 20 chức năng	     Dễ bổ sung chức năng mới
// // Độ phức tạp ban đầu	 Thấp, dễ viết với bài nhỏ	                     Cao hơn do cần thiết kế module
// // Phù hợp	             Bài tập nhỏ, ít chức năng	                     Ứng dụng vừa và lớn


// // Minh họa kiến trúc Monolithic
// let devices = [];

// let choice = 1;

// switch (choice) {
//     case 1:
//         // Thêm thiết bị
//         let name = "Den thong minh";
//         let power = 20;

//         if (name !== "" && power > 0) {
//             devices.push({
//                 name: name,
//                 power: power
//             });
//             console.log("Them thanh cong");
//         }
//         break;

//     case 2:
//         // Xem danh sách
//         for (let i = 0; i < devices.length; i++) {
//             console.log(devices[i]);
//         }
//         break;

//     case 3:
//         // Sửa thiết bị
//         if (devices.length > 0) {
//             devices[0].power = 30;
//             console.log("Cap nhat thanh cong");
//         }
//         break;

//     case 4:
//         // Xóa thiết bị
//         if (devices.length > 0) {
//             devices.splice(0, 1);
//             console.log("Xoa thanh cong");
//         }
//         break;

//     default:
//         console.log("Lua chon khong hop le");
// }


// // Minh họa kiến trúc Modular Function

// // Kho dữ liệu
// let devices = [];

// // Các hàm nghiệp vụ độc lập
// const createDevice = (name, power) => {
//     if (name.trim() === "" || power <= 0) {
//         return false;
//     }

//     devices.push({ name, power });
//     console.log("Them thanh cong");
//     return true;
// };

// const readDevices = () => {
//     console.table(devices);
// };

// const updateDevice = (index, newPower) => {
//     if (
//         index < 0 ||
//         index >= devices.length ||
//         newPower <= 0
//     ) {
//         console.log("Du lieu khong hop le");
//         return false;
//     }

//     devices[index].power = newPower;
//     console.log("Cap nhat thanh cong");
//     return true;
// };

// const deleteDevice = (index) => {
//     if (index < 0 || index >= devices.length) {
//         console.log("Khong tim thay thiet bi");
//         return false;
//     }

//     devices.splice(index, 1);
//     console.log("Xoa thanh cong");
//     return true;
// };

// // Menu chỉ điều phối chức năng
// let choice = 1;

// switch (choice) {
//     case 1:
//         createDevice("Den thong minh", 20);
//         break;

//     case 2:
//         readDevices();
//         break;

//     case 3:
//         updateDevice(0, 30);
//         break;

//     case 4:
//         deleteDevice(0);
//         break;

//     default:
//         console.log("Lua chon khong hop le");
// }
