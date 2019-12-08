let source = [

    { 'letter': 'A', 'frequency': '20' },
    { 'letter': 'B', 'frequency': '70' },
    { 'letter': 'C', 'frequency': '20' },
    { 'letter': 'D', 'frequency': '25' },
    { 'letter': 'E', 'frequency': '90' }
]

source.sort(function compare(first, second) {

    return second.letter > first.letter ? -1 : 0
}).reverse()

let fun = (element_last_before, element_last) => {

    let letter = element_last_before.letter + '' + element_last.letter

    let frequency = parseInt(element_last_before.frequency) + parseInt(element_last.frequency)

    return {

        letter,
        frequency
    }
}

// fun shall be inside fun2 while hidden
var fun2 = (source) => {

    var size = source.length

    var element_last = source[size - 1]
    var element_last_before = source[size - 2]

    // pop the unwanted

    source.pop()
    source.pop()

    // push reasonable

    source.push(fun(element_last_before, element_last))

    return source
}

while(true){
    console.log(source)
source = fun2(source)
console.log(source)

if(source.length===1){
    break
}
}
