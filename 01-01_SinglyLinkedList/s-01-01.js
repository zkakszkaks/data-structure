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

/**
 * 단일 연결 리스트 뒤집기
 * 단일 연결 리스트를 뒤집ㅈ기 위해서는 각 노드를 순회하면서 현재 노드의 next속성을 이전 노드로 설정하면 된다.
 * 1. node는 head의 값을 가진다.
 * 2. prev는 널이다.
 * 3. node값이 null이 아닐 때까지 반복 한다.
 *   3.1 temp는 node.next 값이다
 *   3.2 prev는 node 값이다.
 *   3.3 temp가 null이면 종료한다.
 *   3.4. node는 temp 값이다.
 * 4. 헤드는 마지막 노드 값이다.
 */
SinglyLinkedList.prototype.reverseSingleLinkedList = function () {
  let node = this.head;
  let prev = null;

  while (node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    if (!temp) {
      break;
    }
    node = temp;
  }
  this.head = node;
};

/**
 * 연결 리스트에서 중복된 항목 제거하기
 * 노드를 순회하면서 방문한 노드를 배열에 저장하면 된다.
 * 현재 항목이 이전에 방문한 항목과 같은 경우 현재 항목을 삭제 한다.
 */
// 정렬되지 않은 연결 리스트에서 중복 항목을 삭제한다.
/**
 * 1. track은 빈배열이다.
 * 2. currentNode = null;
 * 3. 이전 값은 null 이다.
 * 3 currentNode가 null이 아닐때 까지  반복한다.
 * 3.1.1 트랙에 현재 노드의 데이터가 있다.
 * 3.1.1.1 이전노드의 next는 현재노드의 넥스트 값이다.
 * 3.2.1.1 크기를 1줄인다.
 * 3.2 트랙에 현재 노드의 데이터 값이 없다.
 * 3.2.1 트랙에 현재노드의 데이터 값을 넣는다.
 * 3.2.2. 이전노드의 현재 노드이다.
 * 3.2.현재노드는 현재노드 다음이다.
 *
 */
SinglyLinkedList.prototype.deleteDuplicateInUnsortedSll = function () {
  let track = [];

  let temp = this.head;
  let prev = null;

  while (temp) {
    if (track.indexOf(temp.data) >= 0) {
      prev.next = temp.next;
      this.size--;
    } else {
      track.push(temp.data);
      prev = temp;
    }
    temp = temp.next;
  }
};

// 정렬되지 않은 연결 리스트에서 중복 항목을 삭제한다.
/**
 * 1. 트랙 빈 객체를 생성
 * 2. this.head는 currentNode이다.
 * 3. prev는 null 이다.
 * 4. currentNode가 null 이 아닐 때까지 반복한다.
 * 4.1 트랙에 데이터가 키로 있다.
 * 4.1.1 이전노드의 다음 값은 현재 노드의 다음 값이다.
 * 4.1.2 링크드리스트 크기를 줄인다.
 * 4.2 트랙에 데이터가 키로 없다.
 * 4.2.1.트랙 객체에 데이터를 이름으로 하는 속성은 추가하고 true를 넣어준다.
 * 4.2.2. 이전값은 현재 노드이다.
 * 4.3현재노드의 값은 다음 노드의 값이다.
 */
SinglyLinkedList.prototype.deleteDuplicateInUnsortedSllBest = function () {
  let track = {};

  let temp = this.head;
  let prev = null;
  while (temp) {
    if (track[temp.data]) {
      prev.next = temp.next;
      this.size--;
    } else {
      track[temp.data] = true;
      prev = temp;
    }
    temp = temp.next;
  }
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
ll1.insert(1);
ll1.insert(1);
ll1.insert(5);
ll1.insert(3);
ll1.insert(3);
ll1.insert(2);
ll1.insert(1);
ll1.insert(3);
ll1.insert(5);
// console.log("배열로 데이터 출력", ll1.toArray());
// console.log("10이 있는가:", ll1.find(10));
// console.log("30이 있는가:", ll1.find(30));
// console.log("50이 있는가:", ll1.find(50));
// console.log("150이 있는가:", ll1.find(150));

console.log("to Array", ll1.toArray());
console.log(ll1.toArray());
ll1.reverseSingleLinkedList(ll1);
console.log(ll1.toArray());
ll1.deleteDuplicateInUnsortedSllBest();
console.log(ll1.toArray());
