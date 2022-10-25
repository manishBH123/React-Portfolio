import React from 'react'
import './CSS/All.css'
import './CSS/Youtube.css'

function Youtubecontents(props) {
    return (
        <>
        <div className="containerc">
            <img src={props.image} alt="sdfg" className='boximg' />
            <div className="content_3">
                <p className='content31'>{props.content_31}</p>
                <p className='content32'>{props.content_32}</p>
                <a href={props.links} className='links3' target="new">Watch in YouTube</a>
            </div>
        </div>
        </>
    )
}

export default Youtubecontents