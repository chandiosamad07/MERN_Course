import React, { Component } from 'react'

export default class CDM extends Component {
    constructor(props) {
      super(props)
    
      console.warn("constructor")
    }

    componentDidMount(){
        console.warn("componentDidMount")
    }
   
    
  render() {
    console.warn("render")
    return (
      <div>
        <h1>componentDidMount</h1>
      </div>
    )
  }
}
