import React from 'react'
import './CSS/All.css'
import './CSS/Secondpage.css'
import './CSS/Cards.css'


function Servicecontent(props) {
    return (
        <>
            <div className="card carrd">
                <div className="img_container">
                    <img src={props.photo} alt="web" className='cardImg' />
                </div>
                <div className="profession">
                    <b> <p className='prof'>{props.prof}</p></b>
                    <p className='profDesc'>{props.profdesc2}</p>
                </div>
            </div>
        </>
    )
}

export default Servicecontent