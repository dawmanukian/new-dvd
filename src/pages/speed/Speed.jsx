import React from 'react'
import "./speed.css"
import {ReactComponent as Dvd} from "../../img/svg/dvd-di.svg"
import Border from "../../img/start_game.png"

const Speed = () => {
  return (
    <div className='page'>
        <div className="speed">
            <Dvd />
            <button className='start-game px'><img src={Border} alt="" /></button>
        </div>
    </div>
  )
}

export default Speed