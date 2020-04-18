/**
 *[문제01] 단일 연결리스트 노드를 생성하는 생성자 함수를 만들어 보자.
 */
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}
/**
 * [문제02] 단일 연결리스트를 생성하는 생성자 함수를 만들어 보자.
 */

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

/**
 * [문제03] 단일 연결리스트가 비어있는지 확인 하는 메소드를 작성해 보자. (메소드이름: isEmpty)
 */
SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

/**
 * [문제00] 단일 연결리스트의 노드들을 배열로 반환하는 메소드를 작성해보자.(toArray)
 */

SinglyLinkedList.prototype.toArray = function () {
  let arr = [];
  let currentHead = this.head;

  if (this.isEmpty()) {
    return arr;
  }
  while (currentHead) {
    arr.push(currentHead.data);
    currentHead = currentHead.next;
  }
  return arr;
};

/**
 * [문제04] 단일 연결리스트에 데이터를 삽입하는 메소드를 작성해 보자. (메소드 이름:insert)
 * 헤드일때 헤드가 아닐때 로 나뉜다.
 */
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temp = new SinglyLinkedListNode(value);
    temp.next = this.head;
    this.head = temp;
  }
  this.size++;
};

/**
 * [문제05] 단일 연결리스트의 데이터를 삭제하는 메소드를 작성해 보자. (remove)
 * 헤드에 있을때 중간에 있을때 마지막에 있을 때로 나뉜다.
 */

/**
 * [문제06] 단일 연결리스트의 헤드 항목을 삭제하는 메소드를 작성해 보자 (deleteAtHead)
 * 헤드가 널일때 헤드가 널이 아닐때 로 나뉨
 */

/**
 * [문제07] 단일 연결리스트의 데이터를 검색하는 함수를 작성해 보자.(find) 데이터가 있으면 true, 없으면 false
 */

/**
 * [문제8] 역순으로 정렬
 */
SinglyLinkedList.prototype.reverse = function () {
  let currentNode = this.head;
  let prev = null;
  while (currentNode) {
    let temp = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    if (!temp) break;
    currentNode = temp;
  }
  this.head = currentNode;
};

/**
 * [문제09] 중복된 데이터 삭제
 */
SinglyLinkedList.prototype.deleteDuplicateNode = function () {
  let track = [];
  let currentNode = this.head;
  let prev = null;

  while (currentNode) {
    if (track.indexOf(currentNode.data) >= 0) {
      prev.next = currentNode.next;
      this.size--;
    } else {
      track.push(currentNode.data);
      prev = currentNode;
    }
    currentNode = currentNode.next;
  }
};

/**
 * [문제09] 중복된 데이터 삭제
 */
SinglyLinkedList.prototype.deleteDuplicateNodeBest = function () {
  let track = {};
  let currentNode = this.head;
  let prev = null;

  while (currentNode) {
    if (track[currentNode.data]) {
      prev.next = currentNode.next;
      this.size--;
    } else {
      track[currentNode.data] = true;
      prev = currentNode;
    }
    currentNode = currentNode.next;
  }
};

let sll = new SinglyLinkedList();

console.log("isEmpty", sll.isEmpty());
console.log("toArray", sll.toArray());
sll.insert(2);
sll.insert(1);
sll.insert(2);
sll.insert(4);
sll.insert(5);
sll.insert(3);
sll.insert(4);
sll.insert(3);
sll.insert(4);
sll.insert(5);
console.log("toArray", sll.toArray());
sll.reverse();
sll.deleteDuplicateNodeBest();

console.log("toArray", sll.toArray());
