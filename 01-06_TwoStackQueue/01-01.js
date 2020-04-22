function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Stack.prototype.push = function (value) {
  this.array.push(value);
};

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

function stackAccessNthTopNode(stack, n) {
  var bufferArray = stack.getBuffer(); // 스택 복사본을 만든다.
  if (n <= 0) throw "error";

  var bufferStack = new Stack(bufferArray); // 복사본으로 새로운 스택을 만든다.

  while (--n !== 0) {
    // n-1번 pop한다.
    // n이 0이 아닌돈안 반복한다. n이 2이면 한번한다.
    bufferStack.pop(); // bufferStack에서 데이터를 팝한다.
  }
  return bufferStack.pop(); // n번째 팝함.
}

function stackSeach(stack, element) {
  var bufferArray = stack.getBuffer();

  var bufferStack = new Stack(bufferArray); // 버퍼 스택으로 복사한다.

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() == element) {
      return true;
    }
  }

  return false;
}

/**
 * [01] 두개의 스택을 사용해 큐를 만들 수 있다.
 * 큐는 dequeue() 메소드를 통해 첫 번째로 추가된 항목을 반환하는 자료 구조다.
 * 스택은 pop() 메소드를 통해 마지막으로 추가된 항목을 반환하는 자료 구조다.
 * 즉, 큐는 스택과 반대 방향으로 항목들을 제거한다.
 *
 * [1, 2, 3, 4, 5]인 스택 배열을 살펴보자.
 *
 * 순서를 뒤집기 위해서는 모든 항목들을 두 번째 스택에 삽입한(push) 다음 두 번째 스택에 항목들을 꺼내야 (pop(할 것이다.
 * ㄸ따라서 두번째 스택 배열은 [5, 4, 3, 2, 1]이 될 것이다.
 *
 * 두 번째 스택에서 항목을 꺼내면 마지막 항목이 제거되는데, 이때 항목은 1이다.
 *
 *
 *
 *
 *
 *
 */

function TwoStackQueue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (val) {
  this.inbox.push(val);
};

/**
 * 1, 2, 3 => 3, 2, 1
 */
TwoStackQueue.prototype.dequeue = function () {
  if (this.outbox.isEmpty()) {
    // outbox가 비어있다.
    while (!this.inbox.isEmpty()) {
      // inbox가 비어있지 않은 동안 반복해라.
      this.outbox.push(this.inbox.pop()); // 인박스의 마지막 데이터를 꺼내서 out박스에 순서대로 넣는다.
    }
  }
  return this.outbox.pop(); // out박스의 마지막 데이터를 리턴한다.
};
var queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("queue", queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
