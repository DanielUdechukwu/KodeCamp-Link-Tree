import React from "react";
import "./App.css";
import Profile from "./assets/profile_img.png"
import Share from "./assets/share.svg"
import Dots from "./assets/dots.svg"
import Slack from "./assets/slack.svg"
import Git from "./assets/github.svg"
import KodeHauz from "./assets/KodeHauz.svg"
import Logo from "./assets/logo.svg"

const App = () => {
  return (
    <div className="container relative">
      <div className="share absolute">
        <img src={Share} alt="share button" />
      </div>
      <div className="dots absolute">
        <img src={Dots} alt="dots button" />
      </div>
      <section className="profile">
        <div className="image-container">
          <img src={Profile} alt="" className="profile-img" />
        </div>
        <p className="profile-name">John Doe</p>
      </section>
      <LinkTree 
        link = "https://www.twitter.com/ChumaUdechukwu"
        text = "Twitter Link"
      />
      <LinkTree 
        link = "#"
        text = "KodeCamp Team"
      />
      <LinkTree 
        link = "#"
        text = "KodeCamp Books"
      />
      <LinkTree 
        link = "#"
        text = "Python Books"
      />
      <LinkTree 
        link = "#"
        text = "Background Check for Coders"
      />
      <LinkTree 
        link = "#"
        text = "Design Books"
      />
      <div className="socials">
        <a href="#"><img src={Slack} alt="slack Icon" /></a>
        <a href="#"><img src={Git} alt="git Icon" /></a>
      </div>

      <Footer />
    </div>
  )
}

const LinkTree = (props) => {
  return (
    <div className="link-container">
      <a href={props.link} className="link">
        <p>{props.text}</p>
      </a>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <p className="footer-text">KodeCamp Internship Task</p>
      <img src={KodeHauz} alt="" className="kodeHauz" />
    </footer>
  )
}

export default App