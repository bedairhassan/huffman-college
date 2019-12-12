// BINARY SEARCH TREE

class Node {
  constructor(frequency,letter) {
    this.frequency = frequency
    this.letter = letter

    this.left = null
    this.right = null
  }
}

class BST {
  constructor(frequency,letter) {
    this.root = new Node(frequency,letter)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(frequency,letter) {
    this.count++

    let newNode = new Node(frequency,letter)

    const searchTree = node => {
      // if frequency < node.frequency, go left
      // original : if (frequency < node.frequency) {
        // foul : if(frequency <= node.frequency) {
       if (frequency <= node.frequency) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode
        } 
        // if left child, look left again
        else {
          searchTree(node.left)
        }
      }
      // if frequency > node.frequency, go right
      else if (frequency > node.frequency) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode
        }
        // if right child, look right again
        else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }

  min() {
    let currentNode = this.root

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.frequency
  }

  max() {
    let currentNode = this.root

    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.frequency
  }

  contains(frequency) {
    let currentNode = this.root

    while (currentNode) {
      if (frequency === currentNode.frequency) {
        return true
      }
      if (frequency < currentNode.frequency) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }

  // depth first search - branch by branch

  // in-order
  // left, root, right
  // 2, 3, 12, 15, 28, 36, 39
  dfsInOrder() {
    let result = []

    const traverse = node => {
      // if left child exists, go left again
      if (node.left) traverse(node.left)
      // capture root node frequency
      result.push(node.frequency)
      // if right child exists, go right again
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  // pre-order
  // root, left, right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = []

    const traverse = node => {
      // capture root node frequency
      result.push(node.frequency)
      // if left child exists, go left again
      if (node.left) traverse(node.left)      
      // if right child exists, go right again
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result    
  }

  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = []

    const traverse = node => {
      // if left child exists, go left again
      if (node.left) traverse(node.left)      
      // if right child exists, go right again
      if (node.right) traverse(node.right)
      // capture root node frequency
      result.push(node.frequency)
    }

    traverse(this.root)

    return result   
  }

  // breadth first search - level by level

  // use a queue!
  // 15, 3, 36, 2, 12, 28, 39
  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while(queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.frequency)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result
  }
}

const Create_BST_Tree = (array)=>{

  var bst = new BST(array[0].frequency,array[0].letter)

  // 0 1 2 : length is 3 : reaches index 2 
  // 0 : new BST()
  // 1 : insert()
  // 2 : insert()
  // start from 1 

  for (let i=1;i<array.length;i++){

    bst.insert(array[i].frequency,array[i].letter)
  }

  return bst; 
}

exports.Create_BST_Tree = Create_BST_Tree

// const bst = new BST(15)

// bst.insert(3)
// bst.insert(36)
// bst.insert(2)
// bst.insert(12)
// bst.insert(28)
// bst.insert(39)

// bst.size()

// bst.min()
// bst.max()

// bst.contains(2)
// bst.contains(9)

// // DFS!!!
// // in-order: 2, 3, 12, 15, 28, 36, 39
// bst.dfsInOrder()

// // pre-order: 15, 3, 2, 12, 36, 28, 39
// bst.dfsPreOrder()

// // post-order: 2, 12, 3, 28, 39, 36, 15
// bst.dfsPostOrder()

// // BFS!!!
// // 15, 3, 36, 2, 12, 28, 39
// bst.bfs()