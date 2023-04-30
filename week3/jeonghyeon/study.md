# 이터레이터, 이터러블

## 이터러블

## 이터러블/이터레이터 프로토콜

- 이터러블

  - 이터레이터를 리턴하는 [Symbol.iterator]()를 가지고 있음

  - 말 그대로 순회할 수 있는 객체
    - array
    - map
    - set
    - typed array
    - string

- 이터레이터
  - {value,done} 객체를 리턴하는 next()를 가진 값
- 그래서 for ... of, 전개 연산자등과 함께 동작하도록 사용할 수 있음

### 이터러블 만들기

```javascript
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const a of iterable) console.log(a);

for (const a of iterator) console.log(a);
```

## 전개 연산자

```javascript
console.clear();

const a = [1, 2];

log([...a, ...arr, ...set, ...map.values()]);
```
