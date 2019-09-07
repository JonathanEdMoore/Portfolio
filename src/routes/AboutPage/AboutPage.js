import React from 'react'
import './AboutPage.css'

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <section className="bio">
          <h2 className="about-header">About me</h2>
          <div></div>
          <img className="profile-photo" alt="" src={require("../../Images/Profile pic.jpg")} />
          <p>I am a web developer and current student of the Engineering Immersion bootcamp at Thinkful. My initial career
            ambition was to pursue a career as an academic philosopher. I attended Tufts University and studied with some
            of the most well-respected philosophers in the world. I've always enjoyed analytical reasoning and
            argumentation, but I became disillusioned with philosophy's disinterest in concrete practical problems. I've
            found that coding has given me the best of both worlds. I'm able to work out my problem-solving skills and
            ponder abstract theoretical problems while also being grounded in the problems of the real world.
          When I'm not coding, I enjoy playing strategy games like chess or poker, training in Muay Thai or Brazilian
          Jiu Jitsu, and powerlifting. And on occasion, I'll read some analytic philosophy.</p>
        </section>
      </div>
    )
  }
}