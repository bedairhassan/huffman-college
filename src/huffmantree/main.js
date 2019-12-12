var table = [

    { 'letter': 'a', 'frequency': '3' },
    { 'letter': 's', 'frequency': '3' },
    { 'letter': 'd', 'frequency': '4' }
]



let tree_array = require('./maintools').GenerateTreeNodesMain(table, [])
var tree = require('./binary_search_tree_modified').Create_BST_Tree(tree_array)
// console.log(tree.size()) // KEEP: obviously, you can use BST functions -> no need to create static functions

console.log(`tree array length is ${tree_array.length} while tree size is ${tree.size()}`)

console.log(tree_array)

let display = tree.dfsInOrder()
console.log(display)

// console.log('\n\n1) import bst javascript SINCE TREE NODES ARE READY\n2) Create tree\n3) modify search function to get the code\n4) Compressed\n5) Try sample like compressing nourhanisfunny, and decompressing nourhanisfunny\n6) Ask Engineer about results and whether do they need adjust or not\n\n WARNING : print in order to see if tree is functioning properly or not :)')