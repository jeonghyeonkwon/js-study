const log = (tag, value) => console.log(tag, value);

const line = (title) => log(title, " ---------------------------------");

// 배열
line("배열");
let arr = [1, 2, 3, 4, 5];
let obj = {};
log("arr type : ", typeof arr);
log("obj type : ", typeof obj);
// type of 로 array object 타입 비교 불가

log("arr prototype : ", arr.__proto__);
log("Array prototype : ", Array.prototype);
log("Object prototype : ", Object.prototype);
log("arr은 Array 상속 받았나? : ", arr.__proto__ === Array.prototype);
log("arr은 Object 상속 받았나? : ", arr.__proto__ === Object.prototype);
log(
  "arr은 Object 상속 받았나? : ",
  arr.__proto__.__proto__ === Object.prototype
);
log("arr", arr);

// Linked List
line("Linked List");

// LinkedList 구현 해보기
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //맨 앞 노드 삽입
  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //맨 끝 노드 삽입
  addLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      //head가 없다면
      this.head = this.head;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // 해당 index에 노드 삽입
  add(index, data) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.addFirst(data);
    }

    const node = new Node(data);

    let current, prev;
    current = this.head;

    let count = 0;

    while (count < index) {
      prev = current;
      count++;

      current = current.next;
    }

    node.next = current;
    prev.next = node;

    this.size++;
  }
  // index로 Node 찾기
  get(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }

      count++;
      current = current.next;
    }

    return null;
  }
  // 삭제하기
  remove(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let prev;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }
    this.size--;
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
  // print()
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

const ll = new LinkedList();
ll.addFirst(100);
log("ll", ll);
ll.addFirst(200);
log("ll", ll);

ll.addLast(600);
log("ll", ll);

ll.add(1, 400);
log("ll", ll);
log("get index : 1", ll.get(1));

log("print", ll.print());
ll.remove(1);
log("print", ll.print());

ll.clear();
log("print", ll.print());
