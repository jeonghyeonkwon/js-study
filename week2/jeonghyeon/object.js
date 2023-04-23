const log = (tag, value) => console.log(tag, value);

const line = (title) => log(title, " ---------------------------------");
line("동등 비교");
class ChirdrenOb {
  constructor(value) {
    this.value = value;
  }
}
class Ob {
  constructor(name, age, value) {
    this.name = name;
    this.age = age;
    this.chirdrenOb = new ChirdrenOb(value);
  }
}

let ob1 = new Ob("권정현", 31, 5);
let ob2 = new Ob("권정현", 31, 5);
let ob3 = ob1;
log("ob1 == ob2", ob1 == ob2); // false
log("ob1 == ob3", ob1 == ob3); // true
log("ob1 === ob2", ob1 === ob2); // false
log("ob1 === ob3", ob1 === ob3); // true
log("Object.is(ob1, ob2)", Object.is(ob1, ob2)); // false
log("Object.is(ob1, ob3)", Object.is(ob1, ob3)); // true

line("얕은 복사");

ob1.age = 29;
ob1.chirdrenOb.value = 6;
log("ob1.age", ob1.age);
log("ob3.age", ob3.age);
log("ob1.chirdrenOb.value", ob1.chirdrenOb.value);
log("ob3.chirdrenOb.value", ob1.chirdrenOb.value);

let ob4 = Object.assign({}, ob1);
log("ob1.age", ob1);
log("ob4.age", ob4);
log("ob1.chirdrenOb.value", ob1.chirdrenOb.value);
log("ob4.chirdrenOb.value", ob4.chirdrenOb.value);

ob1.age = 33;
ob1.chirdrenOb.value = 8;

log("ob1", ob1);
log("ob4", ob4);
let ob5 = { ...ob1 };

ob1.age = 35;
ob1.chirdrenOb.value = 10;

log("ob1", ob1);
log("ob5", ob5);

line("깊은 복사");
let deepObj = JSON.parse(JSON.stringify(ob1));

ob1.age = 11;
ob1.chirdrenOb.value = 77;

log("ob1", ob1);
log("deepObj", deepObj);
