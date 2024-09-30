import React from 'react'
import "./dvd-box.css"
import {ReactComponent as Box} from "../../img/svg/box.svg"
import Border from "../../img/start_game.png"

const DvdBox = () => {
  return (
    <div className='game dvd-box'>
        <div className='dvd-boxes'>
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
        <button className='start-game px'><img src={Border} alt="" /></button>
    </div>
  )
}

export default DvdBox                                                                                             