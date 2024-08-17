import React, { Component } from 'react'

export default class CDU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
  render() {

    return (
      <div>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update count {this.state.count}</button>
      </div>
    )
  }
}
