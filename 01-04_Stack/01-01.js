/**
 * [01] 스택, 큐
 * 1. 다양한 용도로 사용할 수 있는 자료 구조
 * 2.다른 더 복잡한 자료 구조 구현에 널리 사용 된다.
 *
 * [02]
 * 1. 스택과 큐가 무엇인지
 * 2. 스택과 큐를 어떤 식으로 언제 사용해야 할지
 * 3. 스택과 큐를 어떻게 구현해야 할지
 * 4. 스택과 큐의 개념
 * 5.알고리즘 문제에 적용하는 법
 *
 *
 * [03] 스택(Stack)
 * 1. 자료구조의 일종
 * 2. 마지막에 삽인된 항목만을 제거하고 접근할 수 있다.
 * 3. 후입선출(LIFO, last In First Out)
 * 4. 탁자 위의 그릇을 쌓는 과정 - 가장 아래 있는 그릇을 꺼내기 위해 위에 쌓인 다른 모든 그릇들을 제거해야 한다.
 * 5. 스택은 속도가 빠르다는 점이 장점이다.
 * 6. 마지막 항목이 제거될 것이라는 것을 알기 때문에 찾기와 삽입이 상수 시간인 O(1)에 이루어진다.
 * 7. 스택은 알고리즘이 마지막에 추가된 항목만을 접근해야 하는 후입선출 형태로 자료를 처리해야 하는 경우에만 배열에 대해 사용한다.
 *
 */

function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

/**
 * 스택의 복사본을 만든다.
 */
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

/**
 * 스택이 비어있으면 true를 리턴한다.
 */
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

/**
 * 삽입
 *
 * 스택에 항목을 삽입하는 것은 자바스크립트 배열이 기본 지원하는 push 함수를 통해 주행된다.
 */
Stack.prototype.push = function (value) {
  this.array.push(value);
};
/**
 * 들여다 보기
 *
 * 스택의 마지막에 추가된 항목을 들여다보는 것(peeking)
 * 마지막에 추가된 항목을 스택 자료 구조에서 제거하지 않고 반환하는 것을 의미한다.
 * 들여다보기는 마지막에 추가된 항목을 다른 변수와 비교해 마지막에 추가된 항목을 자료 구조애소 제거해야 할지 결정 하기 위해 주로 사용된다.
 */
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};
var stack1 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1); // {array: [1, 2, 3]}

console.log(stack1.peek()); // 3

Stack.prototype.pop = function () {
  return this.array.pop();
};

console.log("pop", stack1.pop(1));
console.log("pop", stack1.pop(2));
console.log("pop", stack1.pop(3));

console.log(stack1);

/**
 * 접근 :
 * 스택에서 n번 데이터를 꺼낼때 뭐가 나오는지 알려주는 함수다.
 *
 * 1. 입력받은 스택의 복사본을 배열로 만든다.
 * 2. 입력받은 n 숫자가 0보다 작거나 같으면 에러다.
 * 3. 복사본배열을 이용해서 스택을 만든다.
 * 4. n-1번 반복하여 스택에서 데이터를 pop한다.
 * 5. n번째 스택 데이터를 팝하여 리턴한다.
 */
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

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stackAccessNthTopNode(stack2, 2);
console.log("stackAccessNthTopNode", stackAccessNthTopNode(stack2, 2));

/**
 * 검색 (element가 스택에 있으면 true 없으면 false리턴)
 * 스택 자료구조에서 특정 항목을 검색하는 것은 중요한 연산이다.
 * 이를 위해 우선 pop이 버퍼 스택에 대해 호출될 수 있도록 버퍼 스택을 만들어야 한다.
 * 이런 식으로 원래 스택으로부터 어떤 항목도 제거되지 않도록 원래 스택은 건드리지 않는다.ㅡ
 */
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

console.log("4가 있는가", stackSeach(stack2, 4));
console.log("2가 있는가", stackSeach(stack2, 2));
