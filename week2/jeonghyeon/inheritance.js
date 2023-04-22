const log = (tag, value) => console.log(tag, value);

const line = (title) => log(title, " ---------------------------------");

line("상속");
//상속
class Item {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  explanation() {
    return `아이템 타입은 ${this.type}이고 아이템 명은 ${this.name} 입니다`;
  }
}

class Sword extends Item {
  constructor(type, name, range) {
    super(type, name);
    this.range = range;
  }

  attack() {
    return `${this.name}으로 범위 ${this.range}까지 공격합니다`;
  }
}

let sword = new Sword("무기", "칼", 5);
log("---> ", sword.explanation());
log("---> ", sword.attack());

// 오버라이딩 - 칼의 attack 재정의
class TwinSwords extends Sword {
  constructor(type, name, range) {
    super(type, name, range);
  }

  attack() {
    return `${this.name}으로 범위 ${this.range}까지 두번 공격합니다`;
  }
}

let twinSwords = new TwinSwords("무기", "쌍칼", 5);
log("---> ", twinSwords.explanation());
log("---> ", twinSwords.attack());

class Shoes extends Item {
  constructor(type, name, speed) {
    super(type, name);
    this.speed = speed;
  }

  run() {
    return `${this.name}을 신고 ${this.speed}만큼 달립니다`;
  }
}

let shoes = new Shoes("옷", "신발", 10);
log("---> ", shoes.explanation());
log("---> ", shoes.run());
// log("---> ", shoes.attack());
