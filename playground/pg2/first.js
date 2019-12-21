var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {

        let returnnthis = 2

            // let returnnthis={
            //     'id':'1',
            //     'description':2
            // }

      resolve(returnnthis);
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
    return value*2
    // expected output: "foo"
  }).then(function (value){

    console.log(value*2)
  })
  
  console.log(promise1);
  // expected output: [object Promise]
  
  