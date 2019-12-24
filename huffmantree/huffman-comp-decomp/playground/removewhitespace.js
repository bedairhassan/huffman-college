let string = '10 101 1'

let removewhitespace = (string)=>{

    let str=''
    for (let i=0;i<string.length;i++){

        if(string[i]===' '){
            continue
        }

        str+=string[i]
    }

    return str
}

//console.log(removewhitespace(string))

exports.removewhitespace = removewhitespace