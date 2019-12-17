var count = 3;

let stringarray = ['hi','hello']

var deduct = (stringarray)=>{

    stringarray.forEach(element=>{
        count--;
        console.log(element)
    })
}

deduct(stringarray)
console.log(count)