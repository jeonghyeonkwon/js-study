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

// 스택
line("스택");
let stack = [1, 2, 3, 4, 5];
log("stack", stack);
stack.push(7);
log("push", stack);

log("pop 실행", stack.pop());
log("pop 후", stack);
stack.push(7);
log("top", stack[stack.length - 1]);

log("size", stack.length);

// queue
line("queue");

// Queue 구현 해보기
class Node2 {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(data) {
    let node = new Node2(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    let node = this.head.data;

    this.head = this.head.next;
    this.size--;
    return node;
  }
  peek() {
    return this.head.data;
  }
  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

let q = new Queue();

q.enqueue(1);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(15);

log("queue", q.print());

log("dequeue", q.dequeue());
q.enqueue(1500);
log("queue", q.print());

log("peek", q.peek());

// Set
line("set");
let set = new Set();
set.add(1);
set.add(2);
set.add(5);
set.add(5);
set.add(1);
log("set", set);
// Map
line("map");
let map = new Map();
map.set("1", "일");
map.set("2", "이");
map.set("3", "삼");
map.set("4", "사");
log("map", map);

map.delete("1");
log("map", map);
