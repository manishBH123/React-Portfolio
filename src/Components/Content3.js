import React from 'react'
import './CSS/Content3.css'
import design from '../Images/manishBH1.png'
import './CSS/All.css'

function Content3() {
  return (
    <>
     <div className="content3">
        <img src= {design}alt="sdfsdf" className='designImg'/>
        <div className="textarea">
            <p className='c3'><b>I'm a Designer</b></p>
            <p className='c31'><b>I Can Design Anything You Want</b></p>
            <p className='c32'>Hello! I am a web developer and a web designer and I am very much passionate and dedeicated about my work. With years of experience in web developing, I had acquired the skills and knowldege necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
            <a href='mailto: manishbhurtel8848@gmail.com' className='ooops'><button className='btn3'>Hire Me</button>   </a>
        </div>
     </div>
    </>
  )
}

export default Content3