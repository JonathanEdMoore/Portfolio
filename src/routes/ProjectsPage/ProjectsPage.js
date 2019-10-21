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
              <p>PROJECT TITLE: Bookmarks app
              </p>
            </li>
            <li>
              <p>USES: HTML, CSS, Javascript, API handling, and JQuery
              </p>
            </li>
          </ul>
        <img className="image" src={require("../../Images/Bookmark-photo.png")} alt='bookmark' />
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
          <p>USES: HTML, CSS, Javascript, react.js, node.js, knex, sql, NPM Packages, and Webpack</p>
        </li>
      </ul>
        <img className="image" src={require("../../Images/spaced-rep.png")} alt="spaced-repetition" />
        <p>This is a training project that I built with a partner while studying at thinkful. The app primarily uses a linked list data structure and simple spaced-repetition learning algorithm to train the user to learn words of a foreign language. I primarily worked on building the backend of the app(node.js, postgres, etc.), but I also assisted on the frontend.</p>
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
        <ul className="project-details">
        <li>
          <p>PROJECT TITLE: Jobreel
          </p>
        </li>
        <li>
          <p>USES: HTML5, CSS3, ReactJS, NodeJS, Express, Enzyme, Mocha, Chai, PostgreSQL</p>
        </li>
      </ul>
        <img className="image" src={require("../../Images/jobreel.jpg")} alt="spaced-repetition" />
        <p>JobReel simplifies the job search process for Thinkful Graduates. The app is loaded with 3rd party API's to assist you in job search. Our database can hold entries such as jobs that user applied to, connects with people, and companies of interest. User is greeted with user friendly dashboard that has all information needed to start searching for the job and connect with people at different companies. The app is responsive and can be used on desktop, laptop, tablet, or phone! Choice is yours! JobReel is your job search companion! My responsibilities on the project included construction of the server using nodeJs and express and construction of the database using postgres. I also assisted in building a number of the frontend components. I was also responsible for quality control of the app for both frontend and backend</p>
        <a href="https://github.com/thinkful-ei-dragonfly/JobReel-client"
          target="blank">
          <button className="github-button">Github Frontend</button>
        </a>
        <a href="https://github.com/thinkful-ei-dragonfly/JobReel-server"
        target="blank">
          <button className="github-button"> Github Backend</button>
        </a>
        <a href="https://jobreel.now.sh/" target="blank">
          <button className="live-link"> Live Demo</button>
        </a>
        <ul className="project-details">
        <li>
          <p>PROJECT TITLE: BudgetBuddy
          </p>
        </li>
        <li>
          <p>USES: HTML5, CSS3, ReactJS, NodeJS, Express, Enzyme, Mocha, Chai, PostgreSQL</p>
        </li>
      </ul>
        <img className="image" src={require("../../Images/BudgetBuddy.png")} alt="spaced-repetition" />
        <p>BudgetBuddy is a virtual check registry application. The purpose of the application is to be an easy to use app that will allow the user to keep track of their daily transactions. </p>
        <a href="https://github.com/JonathanEdMoore/BudgetBuddy_client"
          target="blank">
          <button className="github-button">Github Frontend</button>
        </a>
        <a href="https://github.com/JonathanEdMoore/BudgetBuddy_server"
        target="blank">
          <button className="github-button"> Github Backend</button>
        </a>
        <a href="https://budgetbuddy-app.now.sh" target="blank">
          <button className="live-link"> Live Demo</button>
        </a>
      </section>
      </div>
    )
  }
}