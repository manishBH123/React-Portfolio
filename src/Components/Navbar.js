import React, { useState } from 'react'
import './CSS/Navbar.css'
import manishImg from '../Images/manish.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [bars, setbars] = useState("fa-bars");
    const [box, setbox] = useState("contents");
    const Clicked = () => {
        if (box === "contents") {
            setbox("hidden");
            console.log("active");
        }
        else {
            setbox("contents");
            console.log("hidden");
        }
        if (bars === "fa-bars") {
            setbars("fa-xmark");
        }
        else {
            setbars("fa-bars");
        }
    }
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <a href={manishImg}><img src={manishImg} alt="manishLOGO" className='manishLogo' /></a>
                </div>
                <div className={`${box} contents`}>
                    <ul>
                        <li><Link to = "/" className='links' onClick={Clicked}>HOME</Link></li>
                        <li><Link to = "/Secondpage" className='links' onClick={Clicked}>ABOUT</Link></li>
                        <li><Link to = "/Thirdpage" className='links'  onClick={Clicked}>PORTFOLIO</Link></li>
                        <li className='li4'><button className='contact'><a href = "mailto: manishbhurtel8848@gmail.com" className='li4a'>CONTACT ME</a></button></li>
                    </ul>
                </div>
                <i className={`${bars} fa-solid fa-bars`} onClick={Clicked}></i>
            </div>
        </>
    )
}

export default Navbar