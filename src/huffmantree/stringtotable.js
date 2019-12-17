// string to table 

var ToTable = (string)=>{

    function find_occurences(str, char_to_count) {
        return str.split(char_to_count).length - 1;
      }

      

      var unique = makeUnique(string)

      var table = []

      for (let i=0;i<unique.length;i++){
        table[i] = {

            'frequency' : find_occurences(string,unique[i]),
            'letter' : unique[i]
        }
      }

      return table
}

function makeUnique(str) {
  return String.prototype.concat(...new Set(str))
}

exports.ToTable = ToTable
exports.makeUnique = makeUnique