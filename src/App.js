import React, { useState } from 'react';
import './App.css';
import Table from './pages/Table'

export default class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      raw: [
        { frequency: 3, letter: 'a', code: '00' },
        { frequency: 4, letter: 'd', code: '0' },
        { frequency: 6, letter: 's', code: undefined },
        { frequency: 7, letter: 'da', code: '1' },
        { frequency: 13, letter: 'sda', code: '11' }
      ],
      user: [{ frequency: 'null frequency', letter: 'null letter', code: 'null code' }],
      userstring: ''
    }
  }

  submit() {

    console.log('loading main.js')



    this.api_table();
  }

  api_table() {

  }

  render() {

    return (

      <center>
        <div>
          <center><h1>Huffman Tree</h1></center>

          <h2>Enter your string</h2>
          <input onChange={(e) => { this.setState({ userstring: e.target.value }) }} />

          <button onClick={() => { this.submit() }}>Submit</button>

          <Table data={this.state.user} />
        </div>
      </center>
    )
  }
}

// let promise = new Promise(function(resolve,reject){

//   resolve('hello world')
// })

// promise.then(function(value){

//   alert(value)
// })