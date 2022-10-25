import React from 'react'
import './CSS/Content1.css'
import manishImage1 from '../Images/manish.png'
import './CSS/All.css'

function Content1() {
    return (
        <>
            <div className="content1">
                <div className="texts">
                    <p className='name'><b>Manish Bhurtel</b></p>
                    <p className='desc'>Hi My name is <b>Manish Bhurtel</b>. I am a Full Stack Web developer and a Web Designer who serves you beautiful and functional webpages.</p>
                    <button className='youtube'><a href='https://www.youtube.com/channel/UCZB1mKrTAbrA4miUJJbgSDA' target="new">Watch Videos</a></button>
                </div>
                <a href={manishImage1}><img src={manishImage1} alt="manishImg" className='manishImage'/></a>
            </div>
        </>
    )
}

export default Content1