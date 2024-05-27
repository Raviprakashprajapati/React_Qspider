import React, { Component } from 'react'

export default class  extends Component {

    constructor(){
        super()

        this.state = {
            count:0
        }

        this.handleAdd = () =>{
            this.setState({count: this.state.count+1})
        }
    }

  render() {
    return (
      <div>

        <div>COUNT: {this.state.count}</div>
        <button onClick={this.handleAdd} >Add</button>
        
      </div>
    )
  }
}
