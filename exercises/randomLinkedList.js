class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  static nodeList = []

  addNode(val) {
    const newNode = new Node(val)
    LinkedList.nodeList.push(newNode)
    this.head = newNode;

    if(LinkedList.nodeList.length === 1) {
      this.tail = LinkedList.nodeList[0]
    }
    if(LinkedList.nodeList.length > 1) {
      newNode.next = LinkedList.nodeList[LinkedList.nodeList.length - 2]
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

const list = new LinkedList();
list.addNode(3)
list.addNode(5)
list.addNode(10)

console.log(list.getHead(),'most recent node', list.getHead().next, '2nd to last node',list.getHead().next.next, 'last node')