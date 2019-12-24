console.log('loading main.js')

const tree_array_generate = (USER_STRING) => {

    // function in function 
    const tree_array_generate_child2 = (USER_STRING) => {

        // generates frequency and letter
        var table = require('./stringtotable').ToTable(USER_STRING)

        var tree_array = require('./maintools').GenerateTreeNodesMain(table, [])

        // shuffle
        tree_array = require('./shuffletemplate').shuffle(tree_array)

        // generate code
        var tree = require('./binary_search_tree_modified').Create_BST_Tree(tree_array)

        // display tree as array
        tree_array = tree.dfsInOrderNodesToArray()

        return { tree_array, tree }
    }

    // function in function 
    // for strings with length 1, you shall avoid generate undefined code
    const validate_is_wrong = (tree_array) => {

        for (let i = 0; i < tree_array.length; i++) {

            let object = tree_array[i]

            if (object.letter.length === 1 && object.code === undefined) {
                // console.log({ object })
                return true
            }
        }

        return false
    }


    // function in function 
    let tree_array_generate_child = (USER_STRING) => {

        while (true) {
            let q = tree_array_generate_child2(USER_STRING)
            let wrong = validate_is_wrong(q.tree_array)
            // console.log({ wrong })

            if (wrong === false) {

                return q
            }
        }
    }

    // main 

    let q = tree_array_generate_child(USER_STRING)
    return q

    // console.log(tree_array)
}


// YOUR CODE - main :) - 3 lines - commented them due to redundancy of function calls 
//let USER_STRING = 'aaassssssdddasdqwdqwdwqdqwdqwdQd'
//let q = tree_array_generate(USER_STRING) // has 2 attributes : tree_array,tree
//console.log(q.tree_array)
// console.log(q.tree)

exports.tree_array_generate= tree_array_generate

// if you use react, you will need a promise !
// documentation of promise is @ /playground/promises.js