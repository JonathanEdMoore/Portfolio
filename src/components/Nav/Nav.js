import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component{
  render(){
    return(
      <div>
         <nav role="navigation">
      <h2>
        <Link to='/'>Jonathan Moore</Link>
      </h2>

      <ul className="nav-items">
        <li><Link to='/about' className="about-link">Bio</Link></li>
        <li><Link to='/projects' className="projects-link">Projects</Link></li>
        <li><a href="https://github.com/JonathanEdMoore" target="blank" className='github-link'>Github</a></li>
        <li><a href="https://www.linkedin.com/in/jonathan-moore-73b24721/" target="blank" className="linkedin-link">Linkedin</a></li>
        <li><a href="https://twitter.com/JonathanEMoore" target="blank" className='twitter-link'>Twitter</a></li>
      </ul>
  </nav>
      </div>
    )
  }
}