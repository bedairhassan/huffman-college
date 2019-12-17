console.log('hi nigga')

var table = require('./stringtotable').ToTable('aaassssssdddd')

let tree_array = require('./maintools').GenerateTreeNodesMain(table, [])
var tree = require('./binary_search_tree_modified').Create_BST_Tree(tree_array)
 
const printTree = (tree)=>{

    for(let i=0;i<tree.length;i++){
        console.log('hi nigga')
        console.log(tree[i])
    }
}

console.log(tree.dfsInOrderNODES());

 //let display = tree.dfsInOrder()
 //console.log(display)

// convert to function later.