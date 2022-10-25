import React from 'react'
import './CSS/All.css'
import './CSS/Secondpage.css'
import Servicecontent from './Servicecontent'
import photo1 from '../Images/img2.png'
import photo2 from '../Images/img6.png'
import photo3 from '../Images/img4.png'
import photo4 from '../Images/imgg1.png'
import photo5 from '../Images/goal.png'
import photo6 from '../Images/smartphone.png'
import './CSS/Content2.css'

function Secondpage() {
  return (
    <>
      <div className="secondpage">
          <div className="header_portion3 header_portion">
            <b><p className='header_1'>My Services</p></b>
            <p className='desc1'>Followings are the services that I provide to my Clients.</p>
          </div>
          <div className="card_container">
            <Servicecontent photo={photo1} prof="Web Development" profdesc2="I am into web development for years now. I can provide you fully functional webpages with awesome designs." />
            <Servicecontent photo={photo2} prof="Gaming Services" profdesc2="I am also into gaming for years now. I have managed my whole gaming team with prizes won." />
            <Servicecontent photo={photo3} prof="Photography" profdesc2="Photography is a very beautiful hobby and I provide photography services to you as well." />
            <Servicecontent photo={photo4} prof="Web Designing" profdesc2="I am very fond of designing and I have designed more than 30 websites within given time period." />
            <Servicecontent photo={photo5} prof="Career Advice" profdesc2="Well I can help you choose your respective career on the basis of your likes and interests." />
            <Servicecontent photo={photo6} prof="App Development" profdesc2="App Develeopment is quite complex and is very fun to do. I also provide app development services to you." />
          </div>
      </div>
    </>
  )
}

export default Secondpage