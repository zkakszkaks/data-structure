/**
 * 15장 트리
 *
 * [01] 루트 노드
 * 1. 첫 페이지자 가장 상위 노드
 *
 * [02] 트리 종류
 * 1. 이진 트리
 * 2. 이진 검색 트리
 * 3. 자가 균형 이진 검색 트리
 *
 */

function TreeNode(value) {
  this.value = value;
  this.children = [];
}

/**
 * 이진 트리 : 자식 노드가 왼쪽, 오른쪽 두 개 뿐인 트리
 */
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**
 * 이진 트리에는 항상 루트 노드-최상위에 있는 노드-가 있다.루트 노드는 다른 삽입된 항목이 없을 때 null로 초기화돼 있다.
 */
function BinaryTree() {
  this._root = null;
}

/**
 * 삽입
 **/

/**
 * 트리 순회
 * 1.선순위(pre-order) 순회
 * 2.후순위(post-order) 순회
 * 3.중순위(in-order) 순회
 * 4.단계순위(level0order) 순회
 *
 * 선순위 순회
 * 루트(현재 노드), 왼쪽, 오른쪽 순으로 노드를 방문한다.
 *
 */

BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelPer(this._root);

  function traversePreOrderHelPer(node) {
    if (!node) return;
    console.log(node.value);
    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
  }
};

BinaryTree.prototype.traversePreOrderIterative = function () {
  // 빈 스택을 생성한 다음 루트를 스택에 추가한다.
  var nodeStack = [];
  nodeStack.push(this._root);

  // 모든 항목을 하나씩 꺼낸다. 거낸 모든 항목에 대해 다음 사항을 수행한다.
  // a) 함목을 출력한다.
  // b) 오른쪽 자식을 스택에 추가한다.
  // c) 왼쪽 자식을 스택에 추가한다.
  // 오른쪽 자식을 왼쪽 자식보다 먼저 스택에 추가해
  // 왼쪽 자식이 먼저 처리되도록 했다는 점에 주목하자

  while (nodeStack.length) {
    var node = nodeStack.pop();
    console.log(node.vlaue);

    // 꺼낸 노드의 오른쪽 자식과 왼쪽 자식을 스택에 추가한다.
    if (node.right) nodeStack.push(node.right);
    if (node.left) nodeStack.push(node.left);
  }
};
