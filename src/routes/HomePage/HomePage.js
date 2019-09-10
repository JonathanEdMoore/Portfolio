import React from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends React.Component{
  render(){
    return(
      <div>
      <h1>
      Hi, my name is Jonathan. I'm a fullstack developer!
    </h1>
    <Link to='/' name="bio"></Link>
    <img className="header-image" alt="" src={require("../../Images/Black king.png")} />
    </div>
    )
  }
}