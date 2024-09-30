import React from 'react'
import "./tap-page.css"
import {ReactComponent as Tv} from "../../img/svg/tv.svg"
import Game from '../../components/game/Game'
import GamesSlider from '../../components/games-slider/GamesSlider'

const TapPage = () => {
  return (
    <div className='page tap-page'>
      <div className='tap-line'></div>
        <Tv />
        <p className='px click-text'>Click...</p>
        {/* <Game /> */}
        <GamesSlider />
    </div>
  )
}

export default TapPage