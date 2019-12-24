console.log('loading main.js')

const main = () => {

    const tree_array_generate = () => {

        // generates frequency and letter
        var table = require('./stringtotable').ToTable('aaassssssdddd')

        var tree_array = require('./maintools').GenerateTreeNodesMain(table, [])
        
        // shuffle
        tree_array = require('./shuffletemplate').shuffle(tree_array)

        // generate code
        var tree = require('./binary_search_tree_modified').Create_BST_Tree(tree_array)

        // display tree as array
        tree_array = tree.dfsInOrderNodesToArray()

        return tree_array
    }


    const validate_is_wrong = (tree_array) => {

        for (let i = 0; i < tree_array.length; i++) {

            let object = tree_array[i]

            if (object.letter.length === 1 && object.code === undefined) {
                console.log({ object })
                return true
            }
        }

        return false
    }


    // main starts here
    let tree_array_generate_main = () => {

        while (true) {
            let tree_array = tree_array_generate()
            let wrong = validate_is_wrong(tree_array)
            console.log({ wrong })

            if(wrong===false){

                return tree_array
            }
        }
    }

    let tree_array = tree_array_generate_main()
    console.log(tree_array)

    // console.log(tree_array)
}

main()

// if you use react, you will need a promise !
// documentation of promise is @ /playground/promises.js