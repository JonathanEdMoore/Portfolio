import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from '../../routes/AboutPage/AboutPage'
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage'
import HomePage from '../../routes/HomePage/HomePage'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './App.css'

export default class App extends React.Component {
  renderMainRoutes(){
    return (
      <>
      <Route
      exact
      key='/'
      path='/'
      component={HomePage}
      />

      <Route 
      exact
      key= '/about'
      path='/about'
      component={AboutPage}
      />

      <Route
      exact
      key='/projects'
      path='/projects'
      component={ProjectsPage}
      />
      </>
    )
  }

  render(){
  return (
    <div>
      <div className="content">
    <Nav />
    <main className='App'>
    {this.renderMainRoutes()}
    </main>
    </div>
    <Footer />
    </div>
  );
}
}
