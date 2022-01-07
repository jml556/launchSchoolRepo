class Element {
  constructor(val, nextNode = null) {
    if(val != undefined) {
      this.val = val;
      this.tail = true;
      this.nextNode = null;
      this.head = true;

      Element.nodes.push(this)
      Element.nodeCount++

      if(nextNode) {
        this.tail = false
        nextNode.head = false;
        nextNode.tail = false
        Element.nodes[0].tail = true;
        
        Element.nodes[Element.nodes.length - 1].nextNode = Element.nodes[Element.nodes.length - 2];

        Element.nodes[0].nextNode = null;
        console.log(Element.nodes)
      }
    }
  }

  static nodes = []

  datum() {
    return this.val
  }

  isTail() {
    return this.tail;
  }

  next() {
    return this.nextNode
  }
}

class SimpleLinkedList {
  constructor() {
    this.length = 0;
    this.empty = true;
  }
  size() {
    return this.length;
  }

  isEmpty() {
    return this.empty
  }

  push(val) {
    const node = new Element(val)
    this.length++
    this.empty = false
  }

  peek() {
    if(!Element.nodes.length) return null
    return Element.nodes[Element.nodes.length - 1].val
  }
}

module.exports = {
  Element,
  SimpleLinkedList
}