const table = require('./table').table

const compress = (table, str) => {

    // step 1 refine table ; removes letters which has length bigger than 1
    //table = require('./tablerefine-help').excludebasedonlength(table)
    // console.log(table)

    // step n ; bucket the return string 
    let bucket = []

    // step 2 : cycle
    for (let i = 0; i < str.length; i++) {

        // step 3 : extract letter
        let letter_given = str[i]

        // step 4 : search for letter and return its code
        let search = require('./search').searchletterintable(letter_given, table)
        if (search.found) {

            bucket.push(search.code)
        }

        console.log({ search, letter_given, bucket })
    }

    return bucket.join('')
}

// main function
let main = () => {
    let str = 'dsda' // becomes 10 110 10 010
    console.log({ str })
    console.log(compress(table, str))
}


main()
// main2()

exports.compress = compress