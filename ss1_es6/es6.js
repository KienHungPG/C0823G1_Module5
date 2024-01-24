//1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).

let array = [1, 5, 6, 12, 16, 21, 26, 28, 30];
let newArray1 = array.filter((number) => number > 5);
console.log(newArray);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let newArray2 = array.reduce((total, number) => total + number);
console.log(newArray2);

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
let V = 24;
let newArray3 = array.some((number) => number === V);
if (newArray3) {
  console.log(`${V} được tìm thấy trong mảng`);
} else {
  console.log(`không tìm thấy ${V}`);
}

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).
let newArray4 = array.every((number) => number > 0);
if (newArray4) {
  console.log("Tất cả các phần tử trong mảng lớn hơn 0");
} else {
  console.log("Trong mảng có phần tử nhỏ hơn 0");
}

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
let newArray5 = array.find((number) => number > 3);
if (newArray5) {
  console.log("Phần tử đầu tiên trong mảng lớn hơn 3 là " + newArray5);
} else {
  console.log("Trong mảng không có phần tử nào lớn hơn 3");
}

/* 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" 
 và các phần tử còn lại vào một mảng mới "rest". */

let [first, ...rest] = array;
console.log("Phần tử đầu tiên: " + first);
console.log("Các phần tử còn lại" + rest);

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = [
  {
    name: "Hung",
    age: 24,
  },
  {
    name: "Thuan",
    age: 27,
  },
  {
    name: "Huu",
    age: 26,
  },
];

for (let { name, age } of person) {
  console.log(`Name: ${name}, Age: ${age}`);
}

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

const sumArray = ([...arrayNumberA], [...arrayNumberB]) => {
  let numberResultArray = [...arrayNumberA, ...arrayNumberB];
  return numberResultArray.reduce((sum, element) => sum + element);
};
console.log(sumArray([1, 2, 3, 4, 5], [6, 3, 2]));

/* 9. Sử dụng Rest parameter để nhận vào một danh sách tên 
và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.*/

const nameArray = (...names) => {
  return names;
};
console.log("Welcome " + nameArray("Hung", "Thuan", "Huu"));

/* 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. 
Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách. */

let book = {
  title: "Tết ở làng địa ngục",
  author: "Thảo Trang",
  page: 35,
  displayInfo: function () {
    console.log(
      "Title: " +
        this.title +
        "\n" +
        "Author: " +
        this.author +
        "\n" +
        "Page number: " +
        this.page
    );
  },
};
book.displayInfo();
