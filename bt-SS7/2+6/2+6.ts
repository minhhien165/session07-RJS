// Khai báo mảng kiểu số nguyên
let a2: number[] = [1, 2, 3, 4, 5];

// Khai báo mảng kiểu chuỗi
let b2: string[] = ["Nguyễn", "Minh", "Hiển"];

console.log(a2[0]);
console.log(b2[1]);

// Khai báo một tuple với kiểu dữ liệu number và string
let c2: [number, string] = [3, 'Hiển'];

console.log(c2[0]);
console.log(c2[1]);

// Kiểu dữ liệu:
// Mảng (Array) chỉ chứa các phần tử cùng một kiểu dữ liệu.
// Tuple cho phép lưu trữ các phần tử với các kiểu dữ liệu khác nhau.

// Truy cập phần tử:
// Trong mảng, truy cập các phần tử dựa trên chỉ số.
// Trong tuple, truy cập các phần tử dựa trên chỉ số và kiểu dữ liệu của phần tử đó đã được xác định trước.

// Thao tác:
// Trong mảng, chúng ta có thể thêm, xóa và sắp xếp các phần tử một cách linh hoạt.
// Tuple có thể chứa một số lượng phần tử cố định và không thể thay đổi kích thước sau khi khởi tạo.