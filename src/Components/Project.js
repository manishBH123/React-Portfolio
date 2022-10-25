import React from 'react'
import './CSS/All.css'
import './CSS/Projects.css'
import imagea1 from '../Images/1.png'
import imageb2 from '../Images/2.png'
import imagec3 from '../Images/3.png'
import imaged4 from '../Images/4.png'
import imagee5 from '../Images/5.png'
import imagee6 from '../Images/6.png'
import Projectcontents from './Projectcontents'

function Project() {
  return (
    <>
      <div className="project_container">
       <Projectcontents image = {imagea1} links = "https://github.com/manishBH123/School-Website" content_31 = "School Website" />
       <Projectcontents image = {imageb2} links = "https://github.com/manishBH123/Restaurant-Website" content_31 = "Restaurant Website" />
       <Projectcontents image = {imagec3} links = "https://github.com/manishBH123/Swix-Website" content_31 = "Travel Website" />
       <Projectcontents image = {imaged4} links = "https://github.com/manishBH123/Facebook-Login-Page" content_31 = "Facebook Login Page" />
       <Projectcontents image = {imagee5} links = "https://github.com/manishBH123/Cards" content_31 = "Cards" />
       <Projectcontents image = {imagee6} links = "https://github.com/manishBH123/Card-Slider" content_31 = "Card Slider" />
      </div>
    </>
  )
}

export default Project