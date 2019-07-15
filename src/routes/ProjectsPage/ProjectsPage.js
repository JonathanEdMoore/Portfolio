import React from 'react'
import './ProjectsPage.css'

export default class ProjectsPage extends React.Component{
  render(){
    return(
      <div>
        <section className="projects">
        <h2 className="project-header">Projects</h2>
        <ul className="project-details">
        <li>
          <p>PROJECT TITLE: Quiz app
          </p>
        </li>
        <li>
          <p>USES: HTML, CSS, Javascript, API handling, NPM Packages, and Webpack</p>
        </li>
      </ul>
        <img className="image" src={require("../../Images/Quiz-photo")} />
        <p>This is a simple quiz/trivia app. The user is asked 5 questions, one at a time. Once they've answered each
          question, the app records their score.</p>
        <a href="https://github.com/thinkful-ei-dragonfly/Clinton_Jonathan_Quiz_App/tree/Jonathan-branch"
          target="blank">
          <button className="github-button">Github</button>
        </a>
        <ul className="project-details">
            <li>
              <p>PROJECT TITLE: Bookmarks app
              </p>
            </li>
            <li>
              <p>USES: HTML, CSS, Javascript, API handling, and JQuery
              </p>
            </li>
          </ul>
        <img className="image" src={require("../../Images/Bookmark-photo")} />
        <p>This is an app that allows the user to submit a website url and description to be saved in a bookmarks page.
          The app allows them to delete bookmarks as well as filter according to rating.</p>
        <a href="https://github.com/thinkful-ei-dragonfly/Jonathan-Bookmarks-app" target="blank">
          <button className="github-button">Github</button>
        </a>
        <a href="https://thinkful-ei-dragonfly.github.io/Jonathan-Bookmarks-app/" target="blank">
          <button className="live-link"> Live Demo</button>
        </a>
      </section>
      </div>
    )
  }
}