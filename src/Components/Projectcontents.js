import React from 'react'
import './CSS/All.css'
import './CSS/Projects.css'
import './CSS/Youtube.css'

function Projectcontents(props) {
    return (
        <>
            <div className="containerc">
                <img src={props.image} alt="sdfg" className='boximg ' />
                <div className="content_3">
                    <p className='content31  linked'>{props.content_31}</p>
                    <a href={props.links} className='links3' target="new">See in GitHub</a>
                </div>
            </div>
        </>
    )
}

export default Projectcontents