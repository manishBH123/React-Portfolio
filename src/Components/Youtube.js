import React from 'react'
import './CSS/All.css'
import './CSS/Youtube.css'
import Youtubecontents from './Youtubecontents'
import imagea from '../Images/game.jpg'
import imageb from '../Images/snaps.jpg'
import imagec from '../Images/cards.jpg'
import imaged from '../Images/hover.jpg'
import imagee from '../Images/neon.jpg'

function Youtube() {
  return (
    <>
     <div className="youtube_container">
       <Youtubecontents image = {imagea} links = "https://www.youtube.com/watch?v=hebo3A-UA2Q" content_31 = "Javscript Game" content_32 = "This is a simple number guessing game I made using Javscript. Watch the video and see how I made it."/>
       <Youtubecontents image = {imageb} links = "https://www.youtube.com/watch?v=xTHIBIzAYm8" content_31 = "VS Code Snapshot" content_32 = "Many people are still confused how they can take screenshots of code in VS Code. Watch the video and see how I did it."/>
       <Youtubecontents image = {imagec} links = "https://www.youtube.com/watch?v=7JkY9JHbz0k" content_31 = "CSS Awesome Card" content_32 = "CSS Cards are very important if it comes to making websites with functionalidy. Watch the video and see how I made it."/>
       <Youtubecontents image = {imaged} links = "https://www.youtube.com/watch?v=uTVZBkEAhtg" content_31 = "Cool Menu link Hover" content_32 = "Menu Link hover effect is a really cool effect we can do using Vanilla CSS. Watch the video and see how I made it."/>
       <Youtubecontents image = {imagee} links = "https://www.youtube.com/watch?v=qQeVDRacLiA" content_31 = "Neon Button" content_32 = "Neon button is a very cool button hover effect done using Vanilla CSS. Watch the video and see how I made it."/>
     </div>
    </>
  )
}

export default Youtube