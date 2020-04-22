/**
 * [01] 큐
 * 1. 큐는 스택과 달리 첫 번째로 추가된 항목만을 제거할 수 있는 자료 구조 다.
 * 2. 이러한 원리를 선입선출(FIFO, first in, first out)이라고 한다.
 * 3. 연산이 상수 시간이라는 점이 큐의 장점이다.
 * 4. 큐는 스택과 비슷하게 한 번에 한 개의 항목만 접근 할 수 있기 때문에  한계를 갖는다.
 * 5. 큐는 알고리즘이 첫 번째로 추가된 항목만을 접근해야 하는 선입선출 방식으로 자료를 처리해야 하는 경우에만 배열에 대해 사용한다.
 * 6. 자바스크립트에서 배열에는 큐 클래스를 정의한 shift와 push()라는 메소드가 있다.
 * 7. 자바스크립트에서 배열에 대해 shift() 메소드를 호출하면 배열의 첫 번째 항목을 제거해 반환한다는 점을 기억하자.
 * 8. 큐에 항목을 추가하는 것을 인큐(enqueuing)라 하고, 큐에 항목을 제거하는 것을 디큐(dequeuing)라 한다.
 * 9. shift()는 디큐에 대해 사용할 수 있고 push()는 인큐에 대해 사용할 수 있다.
 *
 */

/**
 * Queue 생성자
 * array이를 반으면 이 배열을 가지고 큐를 생성한다.
 * array를 받지 않으면 빈 큐를 생성한다.
 * 큐 클래스 안에는 array배열이 있다.
 */
function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

/**
 * 큐에있는 데이터를 복사하여 배열로 리턴한다.
 */
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

/**
 * 큐에 데이터가 없으면 true를 리턴한다.
 */
Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// 큐 클래스의 인스턴스
var queue1 = new Queue();

console.log(queue1);

/**
 * 들여다 보기
 *
 * peek 함수는 큐에서 첫 번째 항목을 제거하지 않고도 첫 번째 항목을 반환한다.
 * 스택 구현의 경우 배열의 마지막 항목이 반환됐지만
 * 큐의 경우 선입선출이기 때문에 배열의 첫번째 항목이 반환된다.
 */
Queue.prototype.peek = function () {
  return this.array[0];
};

/**
 * 삽입
 * 앞에서 언급했듯이 큐에서 삽입을 인큐 라 부른다.
 * 배열이 스택 자료를 담는 데 사용되기 때문에 push(메소드를 사용해 enqueue를 구현할 수 있다.)
 */
Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};

var queue = new Queue();
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(queue);

/**
 * 삭제
 * 디큐(dequeue)
 * 배열이 스택 자료를 담는데 사용 되기 때문에 shift() 메소드를 사용해 큐의 첫번째 항목을 제거하고 반환할 수 있다.
 */
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

var queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1); // { array: [1, 2, 3]}

queue1.dequeue();
console.log(queue1);
queue1.dequeue();
console.log(queue1);

/**
 * 접근
 *
 * 1. queue와 몇번째 데이터를 구할지 숫자 n값을 받는다.
 * 2. 큐의 복사본 배열을 구한다.
 * 3. n이 0보다 작거나 같으면 에러다.
 * 4. 복사본배열을 이용해 큐를 구한다.
 * 4. n-1번 반복해서 큐에서 데이터를 꺼낸다.(dequeue)
 * 5. n번째 데이터를 꺼내서 리턴한다.
 */
function queueAccessNthTopNode(queue, n) {
  var bufferArray = queue.getBuffer();
  if (n <= 0) throw "error";

  var bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
}

console.log("queue", queue);
console.log("queueAccessNthTopNode", queueAccessNthTopNode(queue, 2)); // 2

/**
 * 검색
 * 큐에 어떤 항목이 존재하는지 확인하기 위해서는 큐를 검색해야 한다.
 * 검색 역시 원래 큐에 변경이 생기지 않도록 버퍼 큐를 우선 생성해야 한다.
 */

/**
 * queueSrach() queue에서 element를 검색한다. 찾으면 true 없으면 false 이다.
 */
function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer(); // queue 복사본 배열을 만든다.

  var bufferQueue = new Queue(bufferArray); // 복사본 배열로 큐를 만든다.

  while (!bufferQueue.isEmpty()) {
    // 큐가 비어있을 동안 반복한다.
    if (bufferQueue.dequeue() == element) {
      // 큐에서 데이터를 꺼냇는데 엘리면트와 ㅇ리치한다.
      return true;
    }
  }
  return false;
}
