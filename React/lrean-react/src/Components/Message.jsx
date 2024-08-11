
import React from "react";

class Message extends React.Component {
  constructor(){
    super()
    this.state = {
        mes:"Hello this is state"
    }
  }
  handler(){
    this.setState({
        mes:"State is changed"
    })
  }
    render(){
        return (
        <>
        <h1>{this.state.mes}</h1>
       <button onClick={()=>this.handler()}>Click me</button>
        </>
        )
    }
}

export default Message