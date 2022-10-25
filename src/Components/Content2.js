import React from 'react'
import './CSS/Content2.css'
import './CSS/All.css'
import Cards from './Cards'
import image1 from '../Images/img1.png'
import image2 from '../Images/imgg2.png'
import image3 from '../Images/imgg3.png'

function Content2() {
    return (
        <>
            <div className="content2">
                <div className="header_portion">
                    <b><p className='header_1'>Specializing In</p></b>
                    <p className='desc1'>I am specialized in a lot of computer related sectors. I also have a vast knowledge on Data science and System Development. Following are three of my major specialized skills.</p>
                </div>
                <div className="card_container">
                    <Cards img = {image1} profession = "Web Development" profDesc = "Web Development is a very interesting and a fun computer skill. Being a full stack web developer, my experience with web development is very interesting and I have managed to learn both Front end and Back end perfectky with tremendous number of projects done"/>
                    <Cards img = {image2} profession = "UI/UX Designing" profDesc = "I am also a UI/UX designer who serves you beautiful and interesting as well as fully Functional webpages. From my web development and Photoshop experience, I have learned a lot of designs of webpages and templates. So I am specialized in UI/UX designing."/>
                    <Cards img = {image3} profession = "App Development" profDesc = "App development/Software developing has become very popular these days with addition of numerous functionality each day. I have specialized app development and Server site programming which allows me to work with apps for both front end and backend purpose."/>
                </div>
            </div>
        </>
    )
}

export default Content2