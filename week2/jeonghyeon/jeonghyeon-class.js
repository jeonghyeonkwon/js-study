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

line("함수로 만들어 보기");
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

line("getter setter");

class M3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  set name(value) {
    if (value === "") {
      throw Error("빈 값입니다");
    }

    this._name = value;
  }
  set age(value) {
    if (value <= 0) {
      throw Error("나이를 입력 해 주세요");
    }
    this._age = value;
  }
}

let j3 = new M3("권정현", 31);
log("name : ", j3.name);
log("age : ", j3.age);

j3.name = "김정현";
j3.age = 28;
log("age : ", j3.name);
log("age : ", j3.age);

// j3.name = ""; 에러 호출
// j3.age = 0; 에러 호출

// private
//getter, setter
line("프로퍼티들 호출");
log(Object.getOwnPropertyNames(M.prototype));
