import React from 'react'
import "./tap-page.css"
import {ReactComponent as Tv} from "../../img/svg/tv.svg"
import Game from '../../components/game/Game'

const TapPage = () => {
  return (
    <div className='page tap-page'>
        <Tv />
        <p className='px click-text'>Click...</p>
        {/* <Game /> */}
    </div>
  )
}

export default TapPage