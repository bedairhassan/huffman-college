var promise1 = new Promise(function(resolve, reject) {
    let returnnthis = 2

            // let returnnthis={
            //     'id':'1',
            //     'description':2
            // }

      resolve(returnnthis)
  });
  
  promise1.then(function(value) {
    return value*2
    // expected output: "foo"
  }).then(function (value){

    return value*2
  }).then(function(value){

    console.log(value)
  })
  
  
  // expected output: [object Promise]
  
  