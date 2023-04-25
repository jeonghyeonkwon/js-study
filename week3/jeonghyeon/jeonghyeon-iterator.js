const log = (tag, value) => console.log(tag, value);

const line = (title) => log(title, " ---------------------------------");
line("Symbol");

let arr = [1, 2, 3, 4];
log("arr", arr);
for (let i of arr) {
  console.log(i);
}

log("Symbol.iterator", arr[Symbol.iterator]);
arr[Symbol.iterator] = null;
log("arr", arr);
// for (let i of arr) { <- 에러 호출
//   console.log(i);
// }
