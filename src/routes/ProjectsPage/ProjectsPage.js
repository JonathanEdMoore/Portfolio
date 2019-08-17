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
        <img className="image" src={require("../../Images/Quiz-photo")} alt="quiz" />
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
        <img className="image" src={require("../../Images/Bookmark-photo")} alt='bookmark' />
        <p>This is an app that allows the user to submit a website url and description to be saved in a bookmarks page.
          The app allows them to delete bookmarks as well as filter according to rating.</p>
        <a href="https://github.com/thinkful-ei-dragonfly/Jonathan-Bookmarks-app" target="blank">
          <button className="github-button">Github</button>
        </a>
        <a href="https://thinkful-ei-dragonfly.github.io/Jonathan-Bookmarks-app/" target="blank">
          <button className="live-link"> Live Demo</button>
        </a>
        <ul className="project-details">
        <li>
          <p>PROJECT TITLE: Spaced-Repetition
          </p>
        </li>
        <li>
          <p>USES: HTML, CSS, Javascript, react.js, node.js, NPM Packages, and Webpack</p>
        </li>
      </ul>
        <img className="image" src={require("../../Images/spaced-rep.png")} alt="spaced-repetition" />
        <p>This is a training project that I built with a partner while studying at thinkful. The app primarily uses a linked list data structure and simple spaced-repetition learning algoithm to train the user to learn words of a foreign language. I primarily worked on building the backend of the app(node.js, postgres, etc.), but I also assisted on the frontend.</p>
        <a href="https://github.com/thinkful-ei-dragonfly/spaced-repetition-aldiyar-jonathan"
          target="blank">
          <button className="github-button">Github Frontend</button>
        </a>
        <a href="https://github.com/thinkful-ei-dragonfly/spaced-rep-api-aldiyar-jonathan"
        target="blank">
          <button className="github-button"> Github Backend</button>
        </a>
        <a href="https://aldiyar-jonathan-spaced-repetition.now.sh/" target="blank">
          <button className="live-link"> Live Demo</button>
        </a>
      </section>
      </div>
    )
  }
}