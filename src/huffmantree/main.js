console.log('loading main.js')

var table = require('./stringtotable').ToTable('aaassssssdddd')

let tree_array = require('./maintools').GenerateTreeNodesMain(table, [])

tree_array = require('./shuffletemplate').shuffle(tree_array)
//console.log(tree_array)

var tree = require('./binary_search_tree_modified').Create_BST_Tree(tree_array)
 
console.log(tree.dfsInOrderNODES());

 //let display = tree.dfsInOrder()
 //console.log(display)

// convert to function later.