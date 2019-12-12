exports.helloworld = function(){

    return 'Hello World.'
}

function SortLetterHighestToLowest(source){

    source.sort(function compare(first, second) {

        return second.letter > first.letter ? -1 : 0
    }).reverse()

    return source
}

 
function ModifyTree (tree){

tree = require('./privatefunctions').flatCondition(tree) // many arrays in one array to one entire array 
tree = [... new Set(tree)] // array to set : to remove my code's logical errors
tree = require('./privatefunctions').ConvertToInt(tree) // convert '' to int

return tree
}

function SortFrequencyHighestToLowest(tree){

    tree.sort(function compare(first, second) {

        return second.frequency > first.frequency ? -1 : 0
    }).reverse()

    return tree
}

exports.GenerateTreeNodesMain = function (source, tree) {

    // D C B A
    source = SortLetterHighestToLowest(source)

    while (true) {

        // generate tree nodes gets called more than once ! 
        q = require('./privatefunctions').GenerateTreeNodes(source) // parent 
        source = q.source
        tree.push(q.tree) // method-sub-trees : pushing subtrees

        if (source.length === 1) { // used for checking only
            break
        }
    }

    tree = ModifyTree(tree) // method-sub-trees : getting rid of subtrees
    tree = SortFrequencyHighestToLowest(tree)

    // ACTUAL TREE ! ! ! ! !! ! 
    // tree = require('./binary_search_tree_modified').Create_BST_Tree(tree)

    // console.log('finale',tree)
    return tree
}