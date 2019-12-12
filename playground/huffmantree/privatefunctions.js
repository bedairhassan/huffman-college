function ConvertToInt (tree)  {

    for (let i = 0; i < tree.length; i++) {

        tree[i].frequency = parseInt(
            tree[i].frequency)
    }

    return tree
}

var GenerateTreeNodes = (source) => {

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


    // return both source and tree in one single object for destructing 
    // source is for checking 
    // you can print source after each pop so you can know its reason.
    // our main focus is the tree 
    return { source, tree }
}

function GenerateTwoLetters (element_last_before, element_last) {
    
    let letter = element_last_before.letter + '' + element_last.letter

    let frequency = parseInt(element_last_before.frequency) + parseInt(element_last.frequency)

    return {

        letter,
        frequency
    }
}

function flatCondition (tree)  {

    // to flat an array is to remove all sub arrays in it.
    //console.log(tree)

    for (let i = 0; i < tree.length; i++) {
        tree = tree.flat()
    }

    return tree
}

exports.flatCondition = flatCondition
exports.ConvertToInt = ConvertToInt
exports.GenerateTwoLetters = GenerateTwoLetters
exports.GenerateTreeNodes = GenerateTreeNodes