var table = require('./stringtotable').ToTable('aaassssssdddd')

let tree_array = require('./maintools').GenerateTreeNodesMain(table, [])
var tree = require('./binary_search_tree_modified').Create_BST_Tree(tree_array)
 console.log(tree)
 let display = tree.dfsInOrder()
 console.log(display)

// convert to function later.