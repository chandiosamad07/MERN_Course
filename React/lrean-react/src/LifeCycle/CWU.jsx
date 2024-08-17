import React, { Component } from 'react'

export default class CWU extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show:true
      }
    }
    
  render() {
    return (
      <div>
        <h1>componentWillUnmount</h1>
        {
            this.state.show?<Child/>:null
        }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>componentWillUnmount</button>
      </div>
    )
  }
}




 class Child extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
  render() {
    return (
      <div>
        <h1>Chaild Component</h1>
      </div>
    )
  }
}
