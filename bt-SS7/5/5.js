"use strict";
// any
let a5 = 10;
console.log(a5);
// unknown
let b5 = 10;
if (typeof b5 === 'number') {
    console.log(b5);
}
// Kiểm tra kiểu dữ liệu:
// Với any, TypeScript không yêu cầu bạn kiểm tra kiểu dữ liệu và cho phép thực hiện bất kỳ hoạt động nào.
// Với unknown, bạn phải kiểm tra kiểu dữ liệu trước khi thực hiện các hoạt động.
// An toàn kiểu dữ liệu:
// unknown an toàn hơn any vì nó yêu cầu kiểm tra kiểu dữ liệu trước khi sử dụng, giúp giữ cho mã TypeScript an toàn hơn.
