import React from 'react'
import './CSS/All.css'
import './CSS/Photos.css'
import imgg1 from '../Images/mountain.JPG'
import imgg2 from '../Images/mountain2.JPG'
import imgg3 from '../Images/marigold.webp'
import imgg4 from '../Images/marigold2.webp'
import imgg5 from '../Images/moon.JPG'
import imgg6 from '../Images/moon2.JPG'
import imgg7 from '../Images/range.JPG'
import imgg8 from '../Images/hill.JPG'
import imgg9 from '../Images/hill2.JPG'
import imgg10 from '../Images/guitar.jpg'

function Photos() {
  return (
    <>
      <div className="photos_container">
        <div className="item1 item">
        <img src={imgg1} alt="dfgdfg" className='imgg1 imgg'/>
        </div>
        <div className="item3 item">
        <img src={imgg3} alt="dfgdfg" className='imgg3 imgg'/>
        </div>
        <div className="item4 item">
        <img src={imgg4} alt="dfgdfg" className='imgg4 imgg'/>
        </div>
        <div className="item2 item">
        <img src={imgg2} alt="dfgdfg" className='imgg2 imgg'/>
        </div>


        <div className="item5 item">
        <img src={imgg5} alt="dfgdfg" className='imgg5 imgg'/>
        </div>
        <div className="item6 item">
        <img src={imgg6} alt="dfgdfg" className='imgg6 imgg'/>
        </div>
        <div className="item7 item">
        <img src={imgg7} alt="dfgdfg" className='imgg7 imgg'/>
        </div>
        <div className="item10 item">
        <img src={imgg10} alt="dfgdfg" className='imgg8 imgg'/>
        </div>
        <div className="item8 item">
        <img src={imgg8} alt="dfgdfg" className='imgg8 imgg'/>
        </div>
        <div className="item9 item">
        <img src={imgg9} alt="dfgdfg" className='imgg9 imgg'/>
        </div>
      </div>
    </>
  )
}

export default Photos