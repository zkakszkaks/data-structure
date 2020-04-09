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
  var output = [];
  var currentHead = this.head;

  if (currentHead == null) {
    return output;
  }

  while (currentHead.next) {
    output.push(currentHead.data);

    currentHead = currentHead.next;
  }

  output.push(currentHead.data);

  return output;
};

/**
 * [문제04] 단일 연결리스트에 데이터를 삽입하는 메소드를 작성해 보자. (메소드 이름:insert)
 * 헤드일때 헤드가 아닐때 로 나뉜다.
 */
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

/**
 * [문제05] 단일 연결리스트의 데이터를 삭제하는 메소드를 작성해 보자. (remove)
 * 헤드에 있을때 중간에 있을때 마지막에 있을 때로 나뉜다.
 */
SinglyLinkedList.prototype.remove = function (value) {
  var currentHead = this.head;

  if (this.isEmpty()) {
    //throw new Error("연결리스트에 데이터가 존재하지 않습니다.");
    return false;
  }
  if (currentHead.data === value) {
    this.head = this.head.next;
    this.size--;
  } else {
    let prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = prev.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }

    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
};

/**
 * [문제06] 단일 연결리스트의 헤드 항목을 삭제하는 메소드를 작성해 보자 (deleteAtHead)
 * 헤드가 널일때 헤드가 널이 아닐때 로 나뉨
 */
SinglyLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;

  if (this.isEmpty()) {
    return toReturn;
  } else {
    toReturn = this.head.data;
    this.head = this.head.next;
    this.size--;
  }

  return toReturn;
};

/**
 * [문제07] 단일 연결리스트의 데이터를 검색하는 함수를 작성해 보자.(find) 데이터가 있으면 true, 없으면 false
 */
SinglyLinkedList.prototype.find = function (value) {
  let currentHead = this.head;

  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }

  if (currentHead.data == value) return true; // taile 검사

  return false;
};
let ll1 = new SinglyLinkedList();
console.log(ll1.isEmpty());

ll1.remove(3);

console.log("배열로 데이터 출력", ll1.toArray());
ll1.insert(3);
console.log("배열로 데이터 출력", ll1.toArray());
ll1.insert(6);
console.log("배열로 데이터 출력", ll1.toArray());
ll1.insert(9);
console.log("배열로 데이터 출력", ll1.toArray());
ll1.insert(10);
ll1.insert(30);
ll1.insert(50);

console.log("------------");
console.log("배열로 데이터 출력", ll1.toArray());
ll1.remove(3);
console.log("3 삭제후", ll1.toArray());
ll1.remove(9);
console.log("9 삭제 후", ll1.toArray());
console.log(JSON.stringify(ll1));
ll1.remove(50);
console.log("50 삭제 후", ll1.toArray());

console.log("헤드에서 팝한다.", ll1.deleteAtHead());
console.log("헤드에서 팝 한후", ll1.toArray());

console.log("헤드에서 팝한다.", ll1.deleteAtHead());
console.log("헤드에서 팝 한후", ll1.toArray());
console.log("헤드에서 팝한다.", ll1.deleteAtHead());
console.log("헤드에서 팝 한후", ll1.toArray());

console.log("----------");
ll1.insert(10);
ll1.insert(30);
ll1.insert(50);
console.log("배열로 데이터 출력", ll1.toArray());
console.log("10이 있는가:", ll1.find(10));
console.log("30이 있는가:", ll1.find(30));
console.log("50이 있는가:", ll1.find(50));
console.log("150이 있는가:", ll1.find(150));
