const log = (tag, value) => console.log(tag, value);

const line = (title) => log(title, " ---------------------------------");
line("기본적인 클래스 생성");
class M {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getAll() {
    return `이름은 ${this.name} 나이는 : ${this.age} `;
  }
}

let j = new M("권정현", 31);

log("이름 : ", j.name);
log("나이 : ", j.age);

log("이름 : ", j.getName());
log("나이 : ", j.getAge());

j.age = 21;
log("이름 : ", j.name);
log("나이 : ", j.age);

log("이름 : ", j.getName());
log("나이 : ", j.getAge());

log("msg ->", j.getAll());

//함수로 만들어 보기
function M2(name, age) {
  this.name = name;
  this.age = age;
}
M2.getName = function () {
  return this.name;
};
M2.prototype.getAge = function () {
  return this.age;
};
let j2 = new M2("정현", 32);
// log("name : ", j2.getName()); // 에러 뜸 prototype에 메소드를 넣어야 됨
log("age : ", j2.getAge());

log(Object.getOwnPropertyNames(M.prototype));
