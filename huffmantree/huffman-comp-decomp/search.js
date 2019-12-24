const searchcodeintable = (string,table)=>{

    for (let i=0;i<table.length;i++){

        // console.log({
        //     i:i,
        //     string:string,
        //     tablecode:table[i].code,
        //     tableletter:table[i].letter
        // })

        if(string===table[i].code){

            string=''

            return {found:true,letter:table[i].letter};
        }

        
    }

    // console.log('\nwatchsearch is ',watchsearch)
    return {found:false}
}


const searchletterintable = (letter,table)=>{

    // console.log('hi')

    for (let i=0;i<table.length;i++){

        // console.log('searchletterintable: ',{
        //     i:i,
        //     letter,
        //     tableletter:table[i].letter
        // })

        if(letter===table[i].letter){

            return {found:true,code:table[i].code};
        }

        
    }

    // console.log('\nwatchsearch is ',watchsearch)
    return {found:false}
}


// export
exports.searchcodeintable=searchcodeintable
exports.searchletterintable=searchletterintable