import React, {Component} from 'react'

export default class Weather extends Component{
  render(){
    return(
      <div>
        {this.props.temperature}
      </div>
    )
  }
}