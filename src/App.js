import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [given, setGiven] = useState('ABCC')
  const [unique, setUnique] = useState('')
  const [table, setTable] = useState([])

  function find_occurences(str, char_to_count) {
    return str.split(char_to_count).length - 1;
  }

  const manipulateTextbox=()=>{

    // access to textbox !
    document.getElementById("input").value= document.getElementById("input").value.trim()
  }

  const handleSubmit = (e) => {
    
    let tmp=''
    for (let i=0;i<e.target.value.length;i++){

      if(e.target.value[i]===' '){
        continue;
      }

      tmp = tmp.concat(e.target.value[i])
    }

    // setting !
    setGiven(tmp)
    setUnique(makeUnique(given))
    manipulateTextbox()

    // step 2 
    let table = []

    for (let i = 0; i < unique.length; i++) {

      console.log('unique is ', unique[i])
      // table[i].frequency = find_occurences(unique,table[i])
      table[i] = {
        frequency: find_occurences(given, unique[i]),
        letter: unique[i]
      }
    }

    // sort from highest to lowest based on one attribute
    table.sort(function compare(first,second){

      return second.frequency>first.frequency ? -1:0
  }).reverse()

    console.log(table)
    setTable(table)

  }

  const ToggleCheckbox = (e) => {
    document.getElementById('input').disabled = !document.getElementById('input').disabled
  }

  function makeUnique(str) {
    return String.prototype.concat(...new Set(str))
  }

  function handleReset() {

    setUnique('')
    setGiven(' ')
    setTable([])
    document.getElementById('input').value = ''
  }




  return (

    <div className="center">
      <h1>Huffman</h1>

      <button onClick={handleReset}>Reset</button>

      <h2>Enter your input</h2>
      <input id="input" onChange={handleSubmit} id="input" placeholder="double space for submit"/>
      <input type="checkbox" onClick={ToggleCheckbox} />lock<br />

      <h2>Unique Characters are '{unique}'</h2>

      <table>
        {renderHeader(['letter', 'frequency'])}
        <tbody>
          {renderBody(table)}
        </tbody>
      </table>

    </div>
  )

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
}