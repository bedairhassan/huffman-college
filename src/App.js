import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [given, setGiven] = useState('aasssdddd')
  const [unique, setUnique] = useState('')
  const [table, setDisplayTable] = useState([]) // FOR DISPLAY // VISUALS
  const [treeArray, setTreeArray] = useState([])

  const [inOrderString, setinOrderString] = useState('')

  const manipulateTextbox = () => {

    // access to textbox !
    document.getElementById("input").value = document.getElementById("input").value.trim()
  }

  const handleSubmit = () => {

    //console.log(given)

    // setting !
    setUnique(require('./huffmantree/stringtotable').makeUnique(given)).then(function(){
      alert('given is ',given)
    })

    // step 2 
    let stringToTable = require('./huffmantree/stringtotable').ToTable(given)

    setTreeArray(require('./huffmantree/maintools').GenerateTreeNodesMain(stringToTable, []))
    setDisplayTable(treeArray) // for display 

    //console.log('treeArray', treeArray)

    // ISSUE/WARNING/ERROR - needs a promise
    // if (treeArray[0].frequency === undefined) {
    //   return
    // }

    var tree = require('./huffmantree/binary_search_tree_modified').Create_BST_Tree(treeArray)
    //console.log('tree is ', tree)

    // setinOrderString(tree.dfsInOrder)
  }

  const ToggleCheckbox = (e) => {
    document.getElementById('input').disabled = !document.getElementById('input').disabled
  }

  function handleReset() {

    setUnique('')
    setGiven(' ')
    setDisplayTable([])
    document.getElementById('input').value = ''
  }

  return (

    <div className="center">
      <h1>Huffman</h1>

      <button onClick={handleReset}>Reset</button>

      <h2>Enter your input</h2>
      <input id="input" id="input" onChange={(e) => {

        manipulateTextbox()
        setGiven(e.target.value)
      }} placeholder="double space for submit" />
      <button onClick={handleSubmit}>Click Submit Twice</button>
      <input type="checkbox" onClick={ToggleCheckbox} />lock<br />

      <h2>Unique Characters are '{unique}'</h2>

      <table>
        {renderHeader(['letter', 'frequency'])}
        <tbody>
          {renderBody(table)}
        </tbody>
      </table>

      <h1>InOrder {inOrderString}</h1>

    </div>
  )

  function renderHeader(props) {

    return (

      <div>
        <thead>
          {
            props.map(item => {

              return (


                <th>{item}</th>

              )
            })
          }
        </thead>

      </div>
    )
  }

  function renderBody(props) {

    return (

      <div>
        {
          props.map(item => {

            return (

              <tr>
                <td>{item.letter}</td>
                <td>{item.frequency}</td>
              </tr>
            )
          })
        }

      </div>
    )
  }
}