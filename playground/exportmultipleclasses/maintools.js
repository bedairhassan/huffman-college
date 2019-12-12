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

tree = require('../huffmantree/privatefunctions').flatCondition(tree)
tree = [... new Set(tree)]
tree = require('../huffmantree/privatefunctions').ConvertToInt(tree)

return tree
}

exports.SortFunctionsHighestToLowest=function(tree){

    tree.sort(function compare(first, second) {

        return second.frequency > first.frequency ? -1 : 0
    }).reverse()

    return tree
}

exports.GenerateTreeNodesMain = function (source, tree) {

    var GenerateTreeNodes = (source) => {

        // private function
        let GenerateTwoLetters = (element_last_before, element_last) => {
    
            let letter = element_last_before.letter + '' + element_last.letter
    
            let frequency = parseInt(element_last_before.frequency) + parseInt(element_last.frequency)
    
            return {
    
                letter,
                frequency
            }
        }
    
        let tree = []
        let treenode;
    
        var size = source.length
    
        var element_last = source[size - 1]
        var element_last_before = source[size - 2]
    
        // pop the unwanted
    
        treenode = source.pop()
        tree.push(treenode)
    
        treenode = source.pop()
        tree.push(treenode)
    
        // push reasonable
    
        treenode = GenerateTwoLetters(element_last_before, element_last)
        source.push(treenode)
        tree.push(treenode)
    
        return { source, tree }
    }

    while (true) {

        q = GenerateTreeNodes(source) // parent 
        source = q.source
        tree.push(q.tree)

        if (source.length === 1) { // used for checking only
            break
        }
    }

    // console.log('finale',tree)
    return tree
}


// exports known as public functions 
exports.ModifyTree = ModifyTree
exports.SortLetterHighestToLowest = SortLetterHighestToLowest
