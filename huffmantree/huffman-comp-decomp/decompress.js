var table = require('./table').table


// 10 101 11 
// TODO : display error if a character remains

let decompress_this = (table,string)=>{

    let str =[]
    let decompressed = []

    // remove table where letter has length bigger than 1
    table = require('./tablerefine-help').excludebasedonlength(table)
    
    for (let i=0;i<string.length;i++){

        str.push(string[i])

        let searching = require('./search').searchcodeintable(str.join(''),table)
        
        console.log({
            i : i,
            cycle : string[i],
            str : str.join(''),
            searching: searching
        })

        if (searching.found===true){
            decompressed.push(searching.letter)
            str=[]
        }

        

        
    }
    return decompressed
}

let main =()=>{

    let str = '10 110 10 010'
str = require('./playground/removewhitespace').removewhitespace(str)
let decompressed = decompress_this(table,str)
console.log('decompressed: ',decompressed)
}

main()