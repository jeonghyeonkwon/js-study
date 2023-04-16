# 자료형

## 1. 원시값의 메서드
- 자바스크립트는 원시값(문자열,숫자 등)을 마치 객체처럼 다룰 수 있게 해준다.
- 원시값에도 객체에서처럼 메서드를 호출할 수 있다.
- 원시값 !== 객채

 ---

### 원시값 

- 원시형 값이다
- 원시형의 종류는 string, number, bigint*, boolean, symbol*, null, undefined
- * bright : Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
-*symbol : 심볼은 Symbol 함수를 호출함으로써 생성할 수 있다. 이때 생성되는 심볼은 변경이 불가능한 원시 값이다. Symbol 함수를 호출할 때 인자로 전달하는 문자열 값은 생성될 심볼에 대한 일종의 설명문

---

### 객체

- 프로퍼티에 다양한 종류의 값을 저장할 수 있다.
- 대괄호{} 를 사용해 만들 수 있음

 

## 2. 숫자형
- 자바스크립트는 숫자를 나타내는 두 가지 자료형을 지원함
-  1. 일반적인 숫자는 '배정밀도 부동소수점 숫자(double precision floating point number)'로 알려진  64비트 형식 IEEE-754에 저장됨
- 2. 임의의 길이를 가진 정수는 Bigint 숫자로 나타냄 일반적인 숫자는 253이상이거나 -253이하일 수 없다는 제약 때문에 BigInt라는 새로운 자료형이 만들어짐

- 0의 개수를 'e' 뒤에 추가함 123e6은 0이 6개인 숫자, 123000000을 나타냄
- 'e' 다음에 음수가 오면, 음수의 절댓값 만큼 10을 거듭제곱한 숫자로 주어진 숫자를 나눔 123e-6은 0.000123을 나타냄
- 자바스크립트는 특별한 변환 없이 16진수(0x), 8진수(0o), 2진수(0b)를 바로 사용할 수 있게 지원함
- Math.floor, Math.ceil, Math.trunc, Math.round, num.toFixed(precision)를 사용하면 어림수를 구할 수 있음
- 수학적인 연산이 필요하면 Math 객체를 보면됨

---

## 3. 문자열
- 텍스트 형식의 데이터는 길이에 상관없이 문자열 형태로 저장됨
- 자바스크립트에서 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF-16형식을 따름
 
- 따옴표는 세가지 종류 ''(작은따옴표), ""(큰따옴표), ``(백틱)

 

- 특수 문자 목록 : 

- \n	줄 바꿈
- \r	캐리지 리턴(carriage return). Windows에선 캐리지 리턴과 줄 바꿈 특수 문자를 조합(\r\n)해 줄을 바꿉니다. 캐리지 리턴을 단독으론 사용하는 경우는 없습니다.
- \', \"	따옴표
- \\	역슬래시
- \t	탭
- \b, \f, \v	각각 백스페이스(Backspace), 폼 피드(Form Feed), 세로 탭(Vertical Tab)을 나타냅니다. 호환성 유지를 위해 남아있는 기호로 요즘엔 사용하지 않습니다.
 
---

## 4. 배열
- 키를 사용해 식별할 수 있는 값을 담은 컬렉션은 객체라는 자료구조를 이용해 저장함
- 순서가 있는 컬렉션을 저장할 때 배열을 사용함

 

### 1. 배열선언 

let arr = new Array();
let arr = [];
//두가지 방법으로 빈 배열을 만들 수 있음
배열 요소의 자료형엔 제약이 없음

let arr = [ '사과', { name: '감말랭이' }, true, function() { alert('안녕하세요.'); } ];

// 인덱스가 1인 요소(객체)의 name 프로퍼티를 출력
alert( arr[1].name ); // 감말랭이

// 인덱스가 3인 요소(함수)를 실행
arr[3](); // 안녕하세요.
 

### 2. pop, push, shift, unshift

- push : 맨 끝에 요소를 추가함

- shift : 제일 앞 요소를 꺼내 제거한 후 남아있는 요소들을 앞으로 밀어줌

- push : 요소를 스택 끝에 집어넣음

- pop : 스택 끝 요소를 추출

 

 

### 3. 배열의 내부 동작 원리

- 배열은 특별한 종류의 객체임 배열 요소를 대괄호를 사용해 접근하는 방식은 객체 문법에서 온거임
- 숫자형 키를 사용함으로써 배열은 객체 기본 기능 이외에도 순서가 있는 컬렉션을 제어하게 해주는 특별한 메서드를 제공함
- 그렇지만 본질은 객체
- 배열은 7가지 원시자료형에 해당하지 않고 객체형에 속함 그래서 객체처럼 동작함

- 배열은 참조를 통해 복사됨

let fruits = ["바나나"]

let arr = fruits; // 참조를 복사함(두 변수가 같은 객체를 참조)

alert( arr === fruits ); // true

arr.push("배"); // 참조를 이용해 배열을 수정

alert( fruits ); // 바나나,배 - 요소가 두 개가 됨
- 배열은 순서가 있는 자료를 저장하는 용도로 만들어짐

- 임의의 키를 사용해야 한다면 배열보단 객체가 적합할 수 도 있음

 

 

### 4. 성능

- push와 pop은 빠르지만 shift와 unshift는 느림
- shift 메서드를 호출한 것과 동일한 효과를 보려면 인덱스가 0인 요소를 제거하는 것만으론 충분하지 않음 제거 대상이 아닌 나머지 요소들의 인덱스를 수정해 줘야 함

- shift 연산은 아래 3가지 동작을 모두 수행해야 이루어짐
 
1) 인덱스가 0인 요소를 제거

2) 모든 요소를 왼쪽으로 이동시킴 이때 인덱스 1은 0, 2는 1로 변함

3) length 프로퍼티 값을 갱신함

 

그런데 배열에 요소가 많으면 요소가 이동하는 데 걸리는 시간이 길고 메모리 관련 연산도 많아짐

 

push나 pop은 요소 이동을 수반하지않음

pop 메서드로 요소를 끝에서 제거하려면 마지막 요소를 제거하고 length 프로퍼티 값만 줄여주면 됨

pop은 요소를 옮기지 않음으로 각 요소는 인덱스를 그대로 유지함 배열끝에 더해주는 메서드도 마찬가지

 

 

### 4.1 반복문

for문은 배열을 순회할 때 쓰는 가장 오래된 방법 인덱스사용

for

let arr = ["사과", "오렌지", "배"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
for..of

for..of를 사용하면 현재 요소의 인덱스는 얻을 수 없고 값만 얻을 수 있음

let fruits = ["사과", "오렌지", "자두"];

// 배열 요소를 대상으로 반복 작업을 수행함
for (let fruit of fruits) {
  alert( fruit );
}
//사과
//오렌지
//자두
for..in

let arr = ["사과", "오렌지", "배"];

for (let key in arr) {
  alert( arr[key] ); // 사과, 오렌지, 배
}
for..in은 배열에 사용하면 문제가 발생함

for..in 반복문은 모든 프로퍼티를 대상으로 순회함 키가 숫자가 아닌 프로퍼티도 순회 대상에 포함됨

브라우저나 기타 호스트 환경에서 쓰이는 객체 중, 배열과 유사한 형태를 보이는 ‘유사 배열(array-like)’ 객체가 있음

유사 배열 객체엔 배열처럼 length 프로퍼티도 있고 요소마다 인덱스도 붙어 있음

그런데 여기에 더하여 유사 배열 객체엔 배열과는 달리 키가 숫자형이 아닌 프로퍼티와 메서드가 있을 수 있음

유사 배열 객체와 for..in을 함께 사용하면 이 모든 것을 대상으로 순회가 이뤄집니다. 따라서 ‘필요 없는’ 프로퍼티들이 문제를 일으킬 가능성이 생김

for..in 반복문은 배열이 아니라 객체와 함께 사용할 때 최적화되어 있어서 배열에 사용하면 객체에 사용하는 것 대비 10~100배 정도 느림
 

### 5. 다차원 배열

배열안에 배열을 사용할 수 있음

이런 배열을 다차원 배열 이라고함

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, 중심에 있는 요소

---
## 1. map
맵은 키가 있는 데이를 저장하고 다양한 자료형을 사용가능

키를 객체로도 사용가능 함

예시

let john = { name: "John" };

// 고객의 가게 방문 횟수를 카운트
let visitsCountMap = new Map();

// john을 맵의 키로 사용
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123
주요 메서드와 프로퍼티:

new Map([iterable]) – 맵을 만듭니다. [key,value]쌍이 있는 iterable(예: 배열)을 선택적으로 넘길 수 있는데, 이때 넘긴 이터러블 객체는 맵 초기화에 사용됨

map.set(key, value) – 키를 이용해 값을 저장함

map.get(key) – 키에 해당하는 값을 반환함 key가 존재하지 않으면 undefined를 반환함

map.has(key) – 키가 있으면 true, 없으면 false를 반환함

map.delete(key) – 키에 해당하는 값을 삭제함

map.clear() – 맵 안의 모든 요소를 제거함

map.size – 요소의 개수를 반환함

 

일반적인 객체와의 차이점:

키의 타입에 제약이 없음 객체도 키가 될 수 있음

size 프로퍼티 등의 유용한 메서드나 프로퍼티가 있음

 

### 1.1 위크맵
자바스크립트는 불러올 수 있는 값을 메모리에 유지함(가비지 컬렉션)

예시

let john = { name: "John" };

// 위 객체는 john이라는 참조를 통해 접근할 수 있음

// 그런데 참조를 null로 덮어쓰면 위 객체에 더 이상 도달이 가능하지 않게 되어
john = null;

// 객체가 메모리에서 삭제됨
자료구조를 구성하는 요소도 자신이 속한 자료구조가 메모리에 남아있는 동안 대개 도달 가능한 값으로 취급되어 메모리에서 삭제되지 않음

객체의 프로퍼티나 배열의 요소 맵이나 셋을 구성하는 요소들

배열에 객체를 하나추가해서 배열이 메모리에 남아있는  한 배열의 요소인 이 객체도 메모리에 남아 있게됨

이 객체를 참조하는 것이 아무것도 없어도

예시

let john = { name: "John" };

let array = [ john ];

john = null; // 참조를 null로 덮어씀

// john을 나타내는 객체는 배열의 요소이기 때문에 가비지 컬렉터의 대상이 되지 않음
// array[0]을 이용하면 해당 객체를 얻는 것도 가능함
alert(JSON.stringify(array[0]));
이런 관점에서 WeakMap 은 일반 맵과 전혀 다른 양상을 보임

위크맵을 사용하면 키로 쓰인 객체가 가비지 컬렉션의 대상이됨

예시

맵과 위크맵의 첫 번째 차이는 위크맵의 키가 반드시 객체여야 한다는 점

원시값은 위크맵의 키가 될 수 없음

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); //정상적으로 동작함(객체 키).

// 문자열("test")은 키로 사용할 수 없음
weakMap.set("test", "Whoops");
위크맵의 키로 사용된 객체를 참조하는 것이 아무것도 없으면 해당 객체는 메모리와 위크맵에서 자동으로 삭제됨

let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 이제 메모리에서 지워짐
john을 나타내는 객체는 오로지 위크맵의 키로만 사용되고 있으므로, 참조를 덮어쓰게 되면 이 객체는 위크맵과 메모리에서 자동으로 삭제됨

 

### 1.1-1  유스케이스: 추가데이터
서드파티 라이브러리와 같은 외부 코드에 속한 객체를 가지고 작업을 해야하는 상황에서

이 객체에 데이터를 추가해줘야 하는데, 추가해 줄 데이터느 객체가 살아있는 동안에만 유효한 상황임 이럴때 위크맵을 사용함

위크맵에 원하는 데이터를 저장하고, 이때 키는 객체를 사용하면됨 이렇게 사용하면 객체가 가비지 컬렉션 대상이 될 때 데이터도 같이 사라짐

weakMap.set(john, "비밀문서");
// john이 사망하면, 비밀문서는 자동으로 파기됨
 

### 1.1-2 유스케이스:캐싱
아래 예시는 함수 연산 결과를 맵에 저장함

// 📁 cache.js
let cache = new Map();

// 연산을 수행하고 그 결과를 맵에 저장함
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* 연산 수행 */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 함수 process()를 호출해봄

// 📁 main.js
let obj = {/* ... 객체 ... */};

let result1 = process(obj); // 함수를 호출함

// 동일한 함수를 두 번째 호출할 땐,
let result2 = process(obj); // 연산을 수행할 필요 없이 맵에 저장된 결과를 가져오면 됨

// 객체가 쓸모없어지면 아래와 같이 null로 덮어씀
obj = null;

alert(cache.size); // 1 객체가 여전히 cache에 남아있음 메모리가 낭비되고 있음
process를 여러 번 호출하면 최초 호출할 때만 연산이 수행되고, 그 이후엔 연산결과를 cache에서 가져옴

그런데 맵을 사용하고 있어서 객체가 필요 없어져도 cache를 수동으로 청소해 줘야함

이런상황에서 맵을 위크맵으로 교체하면 문제를 예방할 수 있음

예시

// 📁 cache.js
let cache = new WeakMap();

// 연산을 수행하고 그 결과를 위크맵에 저장함
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* 연산 수행 */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* ... 객체 ... */};

let result1 = process(obj);
let result2 = process(obj);

// 객체가 쓸모없어지면 아래와 같이 null로 덮어씀
obj = null;

// 이 예시에선 맵을 사용한 예시처럼 cache.size를 사용할 수 없음
// 하지만 obj가 가비지 컬렉션의 대상이 되므로, 캐싱된 데이터 역시 메모리에서 삭제됨
// 삭제가 진행되면 cache엔 그 어떤 요소도 남아있지 않음
 

 

## 2. set
set은 중복이 없는 값을 저장할 때 쓰임

키가 없는 값이 저장됨

 

주요 메서드와 프로퍼티:

new Set([iterable]) – 셋을 만듬

 iterable 객체를 선택적으로 전달받을 수 있는데(대개 배열을 전달받음), 이터러블 객체 안의 요소는 셋을 초기화하는데 쓰임

set.add(value) – 값을 추가하고 셋 자신을 반환함 셋 내에 이미 value가 있는 경우 아무런 작업을 하지 않음

set.delete(value) – 값을 제거함 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환함

set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환함

set.clear() – 셋을 비움

set.size – 셋에 몇 개의 값이 있는지 세줌

 

### 2.2 위크셋
위크셋은 셋과 유사한데, 객체만 저장할 수 있다는 점이 다름 원시값은 저장할 수 없음

셋 안의 객체는 도달 가능할 때만 메모리에서 유지됨

셋과 마찬가지로 위크셋이 지원하는 메서드는 단출함 add, has, delete를 사용할 수 있고, size, keys()나 반복 작업 관련 메서드는 사용할 수 없음

 

 

맵과 셋에 반복 작업을 할 땐, 해당 컬렉션에 요소나 값을 추가한 순서대로 반복 작업이 수행됨

따라서 이 두 컬렉션은 정렬이 되어있지 않다고 할 수 없음

그렇지만 컬렉션 내 요소나 값을 재 정렬하거나 (배열에서 인덱스를 이용해 요소를 가져오는 것처럼) 숫자를 이용해 특정 요소나 값을 가지고 오는 것은 불가능함

---

## 1. 배열과 메서드
앞에서 다뤘던 push, pop, shift,unshift를 제외하고 서술함

 

### 1.1 splice
배열에서 요소 하나만 지울때는 delete를 사용할 수 도 있음

예시

let arr = ["I", "go", "home"];

delete arr[1]; // "go"를 삭제

alert( arr[1] ); // undefined

// delete를 써서 요소를 지우고 난 후 배열 --> arr = ["I",  , "home"];
alert( arr.length ); // 3
delete로 요소를 지웠지만 배열의 요소는 그대로 3개이다.

delete는 해당 키에 상응하는 값을 지우는 역할이지 배열 자체를 지우는 역할이 아님

배열 그 자체를 지우거나 추가,삭제,교체 등을 하려면 splice를 하면됨

문법

arr.splice(index[, deleteCount, elem1, ..., elemN])
첫번째 파라미터는 인덱스 두번째는 지울 요소의 개수 그 다음은 배열에 추가할 요소

 

삭제 예시

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // 인덱스 1부터 요소 한 개를 제거

alert( arr ); // ["I", "JavaScript"]
 

세개를 지우고 그 자리를 다른 두 요소로 교체

예시

let arr = ["I", "study", "JavaScript", "right", "now"];

// 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체함
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]
 

splice 메서드의 지울 숫자를 0으로 만들면 요소를 제거하지 않으면서 새로운 요소로 추가할 수 있음

예시

let arr = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제함
// 그 후, "complex"와 "language"를 추가함
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
 

음수 인덱스도 사용가능함

대신 배열의 끝에서부터 세아려서 요소 위치를 나타냄

예시

let arr = [1, 2, 5];

// 인덱스 -1부터 (배열 끝에서부터 첫 번째 요소)
// 0개의 요소를 삭제하고
// 3과 4를 추가함
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
 

### 1.2 forEach
arr.forEach는 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해줌

문법

arr.forEach(function(item, index, array) {
  // 요소에 무언가를 할 수 있음
});
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
//매열 내부 요소를 전부 얼럿창을 통해 출력해줌
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
//인덱스 정보까지 더해서 출력해주는 코드
 

## 2. 배열 탐색
배열 내에서 무언가 찾고 싶을 때 쓰는 메서드

indexOf, includes
위 두가지는 문법이 동일 하고 하는 일도 같음

연산 대상이 문자열이 아닌 배열 요소라는 점만 다름

 

indexOf

arr.indexOf(item, from)는 인덱스 from부터 시작해 item(요소)을 찾음

요소를 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환함

 

includes

arr.includes(item, from)는 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당하는 요소를 발견하면 true를 반환함

 

예시

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
 

위 메서드들은 요소를 찾을 때 완전 항등 연산자(===)을 사용함

false를 검색하면 정확히 false만 검색하지 0을 검색하진 않음

 

 

find, findIndex
객체로 이루어진 배열이 있을 때 특정 조건에 부합하는 객체를 배열내에서 찾고 싶을 때 사용함

문법

let result = arr.find(function(item, index, array) {
  // true가 반환되면 반복이 멈추고 해당 요소를 반환함
  // 조건에 해당하는 요소가 없으면 undefined를 반환함
});
요소 전체를 대상으로 함수가 순차적으로 호출됨

item – 함수를 호출할 요소

index – 요소의 인덱스

array – 배열 자기 자신

 

함수가 참을 반환하면 탐색은 중단되고 해당 요소가 반환됨

원하는 요소를 찾기 못했으면 undefined가 반환됨

 

id와 name 프로퍼티를 가진 사용자 객체로 구성된 배열을 예로듬

배열 내에서 id == 1 조건을 충족하는 사용자 객체를 찾고싶음

예시

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
arr.findIndex는 find 와 동일한 일을 하지만

조건에 맞는 요소를 반환하는 대신 해당 요소의 인덱스롤 반환 한다는 점이다름

조건에 맞는 요소가 없으면 -1이 반환됨

 

filter
위에서 이야기했던 find는 함수의 반환 값을 true로 만드는 단 하나의 요소를 찾음

조건을 충족하는 요소가 여러 개라면 arr.filter를 사용하면됨

문법

let results = arr.filter(function(item, index, array) {
  // 조건을 충족하는 요소는 results에 순차적으로 더해짐
  // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됨
});
filter는 find와 문법이 유사하지만, 조건에 맞는 요소 전체를 담은 배열을 반환함

예시

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// 앞쪽 사용자 두 명을 반환함
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
 

## 3. 배열 변형 메서드
map

map은 배열 요소 전체를 대상으로 함수를 호출하고 함수 호출 결과를 배열로 반환해줌

문법

let result = arr.map(function(item, index, array) {
  // 요소 대신 새로운 값을 반환함
});
예시

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
문자열 길이를 반환함
 

sort

arr.sort()는 배열 요소를 정렬해줌 -> 배열 자체가 변경됨

예시

let arr = [ 1, 2, 15 ];

// arr 내부가 재 정렬됨
arr.sort();

alert( arr );  // 1, 15, 2
위 예시에서 기대대로 정렬이 되었으면 1, 2, 15가 나왔어야 정상인데

위 결과 처럼 나온 이유는 요소가 문자열로 취급되어 재 정렬되기 때문

문자열 비교는 사전편집 순으로 진행되기 때문에 2는 15보다 큰값으로 취급됨

기본 정렬 기준 대신 새로운 정렬 기준을 만들려면 새로운 함수를 넘겨줘야 함

넘겨주는 함수는 반드시 값 두개를 비교해야 하고 반환 값도 있어야 함

예시

function compare(a, b) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; //  첫 번째 값이 두 번째 값보다 작은 경우
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr); //1, 2, 15
 

reverse

 

arrd요소를 역순으로 정렬시켜주는 메서드

예시

let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
 

split,join

 

split은 입력받은 문자열을 배열로 바꿀 때 사용

구분자 기준으로 문자열을 쪼개줌

예시

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `${name}에게 보내는 메시지` ); // Bilbo에게 보내는 메시지
}
 

split은 두 번째 인수로 숫자를 받을 수 있음

숫자는 배열의 길이를 제한해줌 -> 길이를 넘어서는 요소를 무시

예시

let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
 

글자단위로도 분리할 수 있음

예시

let str = "test";

alert( str.split('') ); // t,e,s,t
 

join은 split과 반대 역할을 하는 메서드임

배열 요소를 모두 합친 후 하나의 문자열을 만들어줌

예시

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(','); // 배열 요소 모두를 ,를 사용해 하나의 문자열로 합침

alert( str ); // Bilbo,Gandalf,Nazgul


---

## 1. Stack
말 그대로 쌓는 자료를 쌓는 형식임

가장 나중에 들어간 자료가 가장 먼저 빠져나오는 후입선출 방식

- push, pop 등등

- 뒤로가기

 

## 2. Queue
먼저 집어넣은 데이터가 먼저나오는 선입선출 방식임

- 이메일전달

- 푸쉬알림

## 3. Tree
트리는 중첩된 자료구조임 자식을 가진 부모로 부터 출발함

 

## 4. Hash Table
임의의 길이의 테이터를 고정된 길이의 데이터로 매핑하는 함수

key value 시스템으로 작동