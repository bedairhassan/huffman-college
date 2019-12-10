class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() { return this.count }

  insertNode(value) {

    this.count++;
    let newNode = new Node(value);

    const searchTree = node => {

      if (value < node.value) {

        if (!node.left) {
          node.left = newNode
        }
        else {
          searchTree(node.left)
        }
      }
      else if (value > node.value) {

        if (!node.right) {
          node.right = newNode
        }
        else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }

  contains(value){

    let currentNode = this.root

    while(currentNode){

      if(value===currentNode.value){
        return true;
      }
      
      if(value<currentNode.value){

        currentNode = currentNode.left
      } else{

        currentNode = currentNode.right
      }
    }

    return false
  }
}

const bst = new BST(15)

bst.insertNode(3)
bst.insertNode(36)

console.log(bst.contains(15))
console.log(bst.contains(2))