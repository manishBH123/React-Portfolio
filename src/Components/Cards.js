import React from 'react'
import './CSS/All.css'
import './CSS/Cards.css'

function Cards(props) {
  return (
    <> 
     <div className="card">
        <div className="img_container">
        <img src={props.img} alt="web" className='cardImg'/>
        </div>
        <div className="profession">
           <b> <p className='prof'>{props.profession}</p></b>
            <p className='profDesc'>{props.profDesc}</p>
        </div>
     </div>
    </>
  )
}


export default Cards