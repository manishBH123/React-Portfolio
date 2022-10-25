import React from 'react'
import { Route, Routes } from 'react-router'
import './CSS/All.css'
import './CSS/Thirdpage.css'
import './CSS/Navbar.css'
import Project from './Project'
import Youtube from './Youtube'
import Photos from './Photos'
import { Link } from 'react-router-dom'

function Thirdpage() {
    return (
        <>
            <div className="thirdpage">
                <div className="positionOfContents">
                    <div className="textcontent3">
                        <b><p className='c4'>Portfolio</p></b>
                        <b><p className='c41'>My Amazing Works</p></b>
                        <p className='c42'>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                        <div className="works">
                            <ul>
                                <b><li><Link to="./Project" className='links2'>Projects</Link></li></b>
                                <b><li><Link to="./Youtube" className='links2'>Youtube</Link></li></b>
                                <b><li><Link to="./Photos" className='links2'>Photography</Link></li></b>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="toDisplayContent"> */}
                        <Routes>
                            <Route exact path="/Project" element={<Project />} />
                            <Route exact path="/Youtube" element={<Youtube />} />
                            <Route exact path="/Photos" element={<Photos />} />
                        </Routes>
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default Thirdpage