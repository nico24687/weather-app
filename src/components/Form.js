import React, {Component} from 'react'

export default class Form extends Component{
  render(){
    return(
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <input type="submit" value="Get Weather"/>
      </form>
    )
  }
}