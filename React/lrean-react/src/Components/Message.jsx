
import React from "react";

class Message extends React.Component {
   constructor(){
    super()
    this.state={
        mes:'Hello This is State',
    }

   }
    render(){
        return (
        <h1>{this.state.mes}</h1>
        )
    }
}

export default Message