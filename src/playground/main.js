var source = [

    { 'letter': 'A', 'frequency': '20' },
    { 'letter': 'B', 'frequency': '70' },
    { 'letter': 'C', 'frequency': '20' },
    { 'letter': 'D', 'frequency': '25' },
    { 'letter': 'E', 'frequency': '90' }
]

source.sort(function compare(first, second) {

    return second.letter > first.letter ? -1 : 0
}).reverse()

// fun shall be inside fun2 while hidden
var fun2 = (source) => {

    let fun = (element_last_before, element_last) => {

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

    treenode = fun(element_last_before, element_last)
    source.push(treenode)
     tree.push(treenode)

    return {source,tree}
}

const play = (source,tree)=>{
    
    while (true) {
    
        q = fun2(source) // parent 
        source = q.source
        tree.push(q.tree)

        // console.log('\n\n\nsource ', source)
        // console.log('\n\ntree ', tree)
    
        if (source.length === 1) {
            break
        }
    }

// console.log('finale',tree)
return tree
}

let tree = play(source,[])

let flatCondition = (tree)=>{

    // to flat an array is to remove all sub arrays in it.
    //console.log(tree)

    for(let i=0;i<tree.length;i++){
        tree = tree.flat()
    }

    return tree
}

tree = flatCondition(tree)
tree = [... new Set(tree)]

let ConvertToInt = (tree)=>{

    for(let i=0;i<tree.length;i++){

        
        tree[i].frequency=parseInt(
            tree[i].frequency)
    }

    return tree
}

tree = ConvertToInt(tree)

tree.sort(function compare(first, second) {

    return second.frequency > first.frequency ? -1 : 0
}).reverse()

console.log(tree)
console.log('\n\n1) import bst javascript SINCE TREE NODES ARE READY\n2) Create tree\n3) modify search function to get the code\n4) Compressed\n5) Try sample like compressing nourhanisfunny, and decompressing nourhanisfunny\n6) Ask Engineer about results and whether do they need adjust or not\n')