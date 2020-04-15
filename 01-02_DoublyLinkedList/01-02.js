/**
 * [01] 이중 연결 리스트 노드를 구현하라.
 */
function DoublyLinkedListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

/**
 * [02] 이중 연결리스트를 구현 하라.
 */
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

/**
 * [03] 이중 연결리스트가 비어있는지 확인하는 도움 함수를 구현하라.
 */

DoublyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

/**
 * [04] 이중 연결리스트의 데이터를 배열로 리턴하는 함수를 작성하라.
 */
DoublyLinkedList.prototype.toArray = function () {
  let arr = [];
  let currentHead = this.head;

  if (currentHead == null) {
    return arr;
  }

  while (currentHead.next) {
    arr.push(currentHead.data);
    currentHead = currentHead.next;
  }

  arr.push(currentHead.data);
  return arr;
};

/**
 * [05] 헤드에 항목 삽입하기
 * 1. 헤드가 비어 있는 경우
 *  1.1 헤드와 테일을 신규 노드로 설정한다.
 * 2.헤드가 비어 있지 않은 경우
 *  2.1 temp변수에 신규 노드를 저장한다.
 *  2.2 신규 노드의 next가 현재 노드를 가리킨다
 *  3.2 현재 헤드의 prev가 신규 노드를 가리킨다.
 *  3.3. 헤드 포인터가 신규 노드로 갱신된다.
 */
DoublyLinkedList.prototype.addAtFront = function (value) {
  if (this.head === null) {
    // 첫 번재 노드의 null 여부 확인
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
  } else {
    let temp = new DoublyLinkedListNode(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
};

/**
 * [06] 테일에 항목 삽입하기
 * 신규 노드를 이중 연결 리스트의 테일에 추가
 */
DoublyLinkedList.prototype.insertAtTail = function (value) {
  if (this.tail === null) {
    // 첫 번째 노드의 null 여부 확인
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail;
  } else {
    let temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
};

/**
 * [07] 헤드의 항목 삭제하기
 * 1. 항목이 하나만 존재 하는 경우
 *  1.1 헤드와 테일의 포인터 null
 * 2. 항목이 여러개 존재 하는 경우
 *  2.1 헤드를 헤드의 next 포인터로 설정한다.
 *  2.2 신규 헤드의 prev를 null로 설정한다ㅣ.
 *
 * 다음 코드는 큐 자료구조의 dequeue함수와 같이 사용할 수 있어 유용하다.
 */
DoublyLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;

  if (this.head != null) {
    toReturn = this.head.data;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
};

/**
 * [08] 테일의 항목 삭제하기
 * 이중 연결리스트를 양방향 큐 자료구조로 생각해도 된다.
 */
DoublyLinkedList.prototype.deleteAtTail = function () {
  let toReturn = null;

  if (this.tail != null) {
    toReturn = this.tail.data;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  this.size--;
  return toReturn;
};

/**
 * [09] 검색
 * 헤드에서 시작해 찾고자 하는 항목을 검색하도록 이중 연결 리스트 검색 구현
 */
DoublyLinkedList.prototype.findStartingHead = function (value) {
  let currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }

  if (currentHead.data == value) {
    return true;
  }
  return false;
};

/**
 * [10] 테일에서 검색
 */
DoublyLinkedList.prototype.findStartingTail = function (value) {
  var currentTail = this.tail;

  if (this.isEmpty()) {
    // 데이터 없음
    return false;
  }
  while (currentTail.prev) {
    if (currentTail.data == value) {
      return true;
    }
    currentTail = currentTail.prev;
  }

  if (currentTail.data == value) {
    return true;
  }
  return false;
};
let dll = new DoublyLinkedList();
console.log("isEmpty", dll.isEmpty());
console.log("toArray", dll.toArray());
dll.addAtFront("감자");
dll.addAtFront("고구마");
console.log("toArray", dll.toArray());
dll.insertAtTail("마지막에 들어간다 1");
console.log("toArray", dll.toArray());
dll.insertAtTail("마지막에 들어간다 2");
console.log("toArray", dll.toArray());
console.log("헤드에서 삭제", dll.deleteAtHead());
console.log("toArray", dll.toArray());
console.log("헤드에서 삭제", dll.deleteAtHead());
console.log("toArray", dll.toArray());
console.log("테일에서 삭제", dll.deleteAtTail());
console.log("toArray", dll.toArray());
console.log("테일에서 삭제", dll.deleteAtTail());
console.log("toArray", dll.toArray());

dll.addAtFront("1");
dll.addAtFront("2");
dll.addAtFront("3");
dll.addAtFront("4");
dll.addAtFront("5");
dll.addAtFront("6");

console.log("toArray", dll.toArray());
console.log("find 6", dll.findStartingHead("6"));
console.log("find 1", dll.findStartingHead("1"));

console.log("toArray", dll.toArray());
console.log("find tail 6", dll.findStartingTail("6"));
console.log("find tail 6", dll.findStartingTail("4"));
console.log("find tail 1", dll.findStartingTail("1"));
