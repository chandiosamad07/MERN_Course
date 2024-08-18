import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }
  Showhandler = () => {
    this.setState({
      show: true,
    });
  };
  Hidehandler = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.show ? <h1>welcome</h1> : null}
        <button onClick={this.Showhandler}>Show</button>
        <button onClick={this.Hidehandler}>Hide</button>
      </div>
    );
  }
}
