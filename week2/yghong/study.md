ES2015 이전
ES2015 이전에는 객채 생성을 위해 생성자를 사용

예시

function Person({name, age}) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function() {
  return `안녕하세요, 제 이름은 ${this.name}입니다.`;
};

const person = new Person({name: '홍길동', age: 19});
console.log(person.introduce()); // 안녕하세요, 제 이름은 홍길동입니다.
console.log(typeof Person); // function
console.log(typeof Person.prototype.constructor); // function
console.log(typeof Person.prototype.introduce); // function
console.log(person instanceof Person); // true
 

 

ES2015 클래스
생성자의 기능을 대체함

예시

// 클래스
class Person {
  // 이전에서 사용하던 생성자 함수는 클래스 안에 `constructor`라는 이름으로 정의함
  constructor({name, age}) {
    this.name = name;
    this.age = age;
  }

  // 객체에서 메소드를 정의할 때 사용하던 문법을 그대로 사용하면, 메소드가 자동으로 `Person.prototype`에 저장됨
  introduce() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}

const person = new Person({name: '홍길동', age: 19});
console.log(person.introduce()); // 안녕하세요, 제 이름은 홍길동입니다.
console.log(typeof Person); // function
console.log(typeof Person.prototype.constructor); // function
console.log(typeof Person.prototype.introduce); // function
console.log(person instanceof Person); // true
 

class블록에서는 자바스크립트의 다른곳에서 사용되지 않는 별도의 문법으로 코드를 작성해야함

예시

// 클래스는 함수가 아님
class Person {
  console.log('hello');
}
// 에러: Unexpected token


// 클래스는 객체가 아님
class Person {
  prop1: 1,
  prop2: 2
}
// 에러: Unexpected token
 

ES2015 이전 생성자와 클래스 의차이

 

- 클래스는 함수로 호출될 수 없음

- 클래스 선언은 let과 const처럼 블록 스코프에 선언되며, 호이스팅(hoisting)이 일어나지 않음

- 클래스의 메소드 안에서 super 키워드를 사용할 수 있음

 

메소드정의
클래스의 메소드(method)란 어떠한 작업을 수행하기 위한 명령문의 집합이라 할 수 있음

클래스 내에서 메소드는 static 키워드의 여부에 따라 다음과 같이 구분됨

 

1.인스턴스 메소드(instance method)

2. 클래스 메소드(static method)

 

객채 리터럴에서 사용하던 문법과 유사함

 

인스턴스 메소드 문법

예시

class Calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
}
임의 표현식을 대괄호로 둘러싸서 메소드 이름으로 사용가능

예시

const methodName = 'introduce';
class Person {
  constructor({name, age}) {
    this.name = name;
    this.age = age;
  }
  // 아래 메소드의 이름은 `introduce`가 됨
  [methodName]() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}

console.log(new Person({name: '홍길동', age: 19}).introduce()); // 안녕하세요, 제 이름은 홍길동입니다.
 

Getter* 혹은 setter*를 정의하고 싶을 때는 메소드 이름 앞에 get 또는 set을 붙여주면 됨

*getter는 멤버변수의 값을 호출하는 메소드이고, setter는 멤버변수의 값을 변경시키는 메소드이다.

예시

class Account {
  constructor() {
    this._balance = 0;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }
}

const account = new Account();
account.balance = 10000;
account.balance; // 10000
 

스태틱 메소드는 static키워드를 메소드 이름 앞에 붙여주면 됨

예시

class Person {
  constructor({name, age}) {
    this.name = name;
    this.age = age;
  }
  // 이 메소드는 정적 메소드
  static sumAge(...people) {
    return people.reduce((acc, person) => acc + person.age, 0);
  }
}

const person1 = new Person({name: '홍길동1', age: 20});
const person2 = new Person({name: '홍길동2', age: 20});

Person.sumAge(person1, person2); // 40
 

Generator 메소드를 정의하려면, 메소드 이름 앞에 * 기호를 붙여주면 됨

Symbol.iterator 메소드를 generator로 정의해주면, 클래스의 인스턴스를 쉽게 iterable로 만들 수 있음

예시

class Gen {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

for (let n of new Gen()) {
  console.log(n);
}
// 1, 2, 3이 차례대로 출력됨

클래스 필드 Class Field
클래스 블록 안에서 할당 연산자를 이용해 인스턴스 속성을 지정할 수 있는 문법

예시

class Counter {
  static initial = 0; // static class field
  count = Counter.initial; // class field
  inc() {
    return this.count++;
  }
}

const counter = new Counter();
console.log(counter.inc()); // 0
console.log(counter.inc()); // 1

Counter.initial = 10;
console.log(new Counter().count); // 10
 

클래스 필드와 this
class 블록은 새로운 블록 스코프를 형성하고, 내부에서 사용된 this는 인스턴스 객체를 가리킴

class MyClass {
  a = 1;
  b = this.a;
}

new MyClass().b; // 1
화살표 함수를 통해서 메소드를 정의할 수 있음

class MyClass {
  a = 1;
  getA = () => {
    return this.a;
  }
}

new MyClass().getA(); // 1
클래스 상속
클래스 상속(class inheritance, subclassing) 기능을 통해 한 클래스의 기능을 다른 클래스에서 재사용 가능

예시

class Parent {
  // ...
}

class Child extends Parent {
  // ...
}
이 관계를 보고 '부모 클래스-자식 클래스 관계' 혹은 '슈퍼 클래스(superclass)-서브 클래스(subclass) 관계'라고 말하기도 함

 

어떤 클래스 A가 다른 클래스 B를 상속받으면, 다음과 같은 일들이 가능해짐

- 자식 클래스 A를 통해 부모 클래스 B의 정적 메소드와 정적 속성을 사용할 수 있음

- 부모 클래스 B의 인스턴스 메소드와 인스턴스 속성을 자식 클래스 A의 인스턴스에서 사용할 수 있음

예시

class Parent {
  static staticProp = 'staticProp';
  static staticMethod() {
    return 'I\'m a static method.';
  }
  instanceProp = 'instanceProp';
  instanceMethod() {
    return 'I\'m a instance method.';
  }
}

class Child extends Parent {}

console.log(Child.staticProp); // staticProp
console.log(Child.staticMethod()); // I'm a static method.

const c = new Child();
console.log(c.instanceProp); // instanceProp
console.log(c.instanceMethod()); // I'm a instance method.
 

super
자식 클래스에서 부모 클래스의 정적 속성과 인스턴스 속성에 접근할 수 있음 하지만, 자식 클래스에 같은 이름의 속성을 정의한 경우 문제가 생김

예시

class Melon {
  getColor() {
    return '제 색깔은 초록색입니다.';
  }
}

class WaterMelon extends Melon {
  getColor() {
    return '속은 빨강색입니다.';
  }
}

const waterMelon = new WaterMelon();
waterMelon.getColor(); // 속은 빨강색입니다.
이런 경우에, super 키워드를 통해 부모 클래스의 메소드에 직접 접근 가능

예시

class Melon {
  getColor() {
    return '제 색깔은 초록색입니다.';
  }
}

class WaterMelon extends Melon {
  getColor() {
    return super.getColor() + ' 하지만 속은 빨강색입니다.';
  }
}

const waterMelon = new WaterMelon();
waterMelon.getColor(); // 제 색깔은 초록색입니다. 하지만 속은 빨강색입니다.
super의 동작 방식

- 생성자 내부에서 super를 함수처럼 호출하면, 부모 클래스의 생성자가 호출됨

- 정적 메소드 내부에서는 super.prop과 같이 써서 부모 클래스의 prop 정적 속성에 접근할 수 있음

- 인스턴스 메소드 내부에서는 super.prop과 같이 써서 부모 클래스의 prop 인스턴스 속성에 접근할 수 있음

예시

class Person {
  constructor({name, age}) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `제 이름은 ${this.name}입니다.`
  }
}

class Student extends Person {
  constructor({grade, ...rest}) {
    // 부모 클래스의 생성자를 호출할 수 있음
    super(rest);
    this.grade = grade;
  }
  introduce() {
    // 부모 클래스의 `introduce` 메소드를 호출할 수 있음
    return super.introduce() + ` 저는 ${this.grade}학년입니다.`;
  }
}

const s = new Student({grade: 3, name: '홍길동', age: 19});
s.introduce(); // 제 이름은 홍길동입니다. 저는 3학년입니다.