/**
 * [문제01] 스택 이란?
 * 1. 후입선출LIFO, last in first out
 * 2. 마지막에 들어간 것이 가장 먼저 나온다.
 * 3. push, pop 메소드가 있다. push(데이터 넣기) pop(마지막에 넣은 데이터 꺼내오기)
 *
 * [문제02] 스택의 장점
 * 1. 속도가 빠르다.
 * 2. 마지막 항목이 제거될 것이라는 것을 알기 때문에 찾기와 삽입이 상수 시간 O(1) 에 이루어진다.
 *
 * [문제03] 스택 생성자 함수의 내용을 설명하여라.
 * 1. 내부에 array 배열을 갖는다.
 * 2. 함수에 배열을 파라메터로 넘기면 해당 배열을 가진 스택이 된다.
 *
 * [문제04] 스택 생성자 구현하기
 */
function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

/**
 * [문제05] 스택의 데이터를 배열로 리턴하는 getBuffer 메소드 구현하기
 */
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

/**
 * [문제06] 스택에 비어있는지 확인 하는 isEmpty 메소드 구현하기
 */
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

let stack1 = new Stack();
console.log("stack1", stack1);
console.log("getBuffer", stack1.getBuffer());
console.log("isEmpty", stack1.isEmpty());

/**
 * [문제07] 삽입
 */
Stack.prototype.push = function (value) {
  this.array.push(value);
};

/**
 * [문제08] 스택의 마지막에 추가된 항목을 들여다 고는 peek 메소드 구현
 */
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log("stack1", stack1);
console.log("peek", stack1.peek());

/**
 * [문제09] 스택의 마지막에 넣은 데이터를 삭제하는 pop메소드 작성
 */
Stack.prototype.pop = function () {
  return this.array.pop();
};

console.log("pop", stack1.pop());

console.log(stack1);

/**
 * [문제10] n번째 노드에 접근
 */
function stackAccessNthTopNode(stack, n) {
  var bufferArray = stack.getBuffer();
  if (n <= 0) throw "error";

  var bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }
  return bufferStack.pop();
}

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log("stackAccessNthTopNode", stackAccessNthTopNode(stack2, 2)); // 2
