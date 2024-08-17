import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
         username:'',
         message:'',
         skill:''
      }
    }
    GetuserName =(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    GetuserMessage =(e)=>{
        this.setState({
            message:e.target.value
        })
    }
    GetuserSkill =(e)=>{
        this.setState({
            skill:e.target.value
        })
    }
    SubmitHandler = ()=>{
    alert(`${this.state.username}${this.state.message} ${this.state.skill}`)
    }
  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <div>
        <label htmlFor="">Username</label>
        <input type="text" value={this.state.username} onChange={this.GetuserName}/>
        </div>
        <div>
            <label htmlFor="">Message</label>
            <textarea name=""  value={this.state.message} onChange={this.GetuserMessage}></textarea>
        </div>
        <select value={this.state.skill} onChange={this.GetuserSkill}>
            <option value="react">React</option>
            <option value="vue">vue</option>
            <option value="angular">angular</option>
        </select>
        <button type='submit'>Click me</button>
      </form>
    )
  }
}
