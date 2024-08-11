import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    inc = () =>{
        this.setState({
            count: this.state.count +1
        })
    }
    dec = () =>{
        this.setState({
            count: this.state.count -1
        })
    }
    render() { 
        return ( <>
        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.inc()}>increament</button>
        <button onClick={()=>this.dec()}>Decreament</button>
        </> );
    }
}
 
export default Counter;