import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import './CSS/All.css'


function Firstpage() {
  return (
    <>
      <div className="firstpage_container">
        <Content1 />
        <Content2 />
        <Content3 />
      </div>
    </>
  )
}

export default Firstpage