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
//getter, setter
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

line("오버로딩");

class C {
  constructor(c1, c2, c3) {
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
  }

  change(c1, c2) {
    this.c1 = c1;
    this.c2 = c2;
  }
  change(c1, c2, c3) {
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
  }
}

let c = new C(1, 2, 3);
log("c1 : ", c.c1);
log("c2 : ", c.c2);
log("c3 : ", c.c3);

c.change(4, 5);
log("c1 : ", c.c1);
log("c2 : ", c.c2);
log("c3 : ", c.c3); // undefined 자바스크립트는 오버로딩 기능 없음...

c.change(6, 7, 8);
log("c1 : ", c.c1);
log("c2 : ", c.c2);
log("c3 : ", c.c3);

// 사용할려면 이런식으로
line("자바스크립트 내의 오버로딩");
class C2 {
  constructor() {}
  sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
}
let c2 = new C2();
log("sum1 : ", c2.sum(1, 2, 3, 4, 5));
log("sum2 : ", c2.sum(12, 3, 4));

line("프로퍼티들 호출");
log(Object.getOwnPropertyNames(M.prototype));
