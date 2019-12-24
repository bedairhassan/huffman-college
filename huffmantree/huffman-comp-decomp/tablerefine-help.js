const table = require('./table').table

// exclude even elements
// ig
const excludeeven = (table)=>{

    let ret = []

    for (let i=0;i<table.length;i++){

        if(i===0){
            continue
        }

        ret.push(table[i])
    }

    return ret
}

// exclude even elements
const excludebasedonlength = (table)=>{

    let ret = []

    for (let i=0;i<table.length;i++){

        if(table[i].letter.length>1){
            continue
        }

        ret.push(table[i])
    }

    return ret
}


exports.excludebasedonlength = excludebasedonlength