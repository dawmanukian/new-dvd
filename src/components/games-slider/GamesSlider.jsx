import React, { useState } from 'react'
import "./games-slider.css"
import {ReactComponent as Arrow} from "../../img/svg/arrow.svg"
import {ReactComponent as Scream} from "../../img/svg/scream-gm.svg"
import {ReactComponent as Speed} from "../../img/svg/speed-gm.svg"
import {ReactComponent as DvdBox} from "../../img/svg/dvd-box-gm.svg"

const GamesSlider = () => {

    const [slides, setSlides] = useState(1)

  return (
    <div className='game-slider'>
        {
            slides === 1 && (
            <div className='gm-slide'>
                <div>
                    <div className='game-box'><Scream /></div>
                    <div>
                        <p className='game-name'>Scream</p>
                        <span className='game-des'>Scream as loud as you can to get the reward!</span>
                    </div>
                </div>
                <button className='slide-btn' onClick={() => setSlides(2)}><Arrow /></button>
            </div>
            )
        }
        {
            slides === 2 && (
                <div className='gm-slide'>
                    <div>
                        <div className='game-box'><Speed /></div>
                        <div>
                            <p className='game-name'>Speed</p>
                            <span className='game-des'>Try to click fast fast and make it in time!</span>
                        </div>
                    </div>
                    <button className='slide-btn' onClick={() => setSlides(3)}><Arrow /></button>
                </div>
            )
        }
        {
            slides === 3 && (
                <div className='gm-slide'>
                    <div>
                        <div className='game-box'><DvdBox /></div>
                        <div>
                            <p className='game-name'>DVD Box</p>
                            <span className='game-des'>Can you guess where the disk is?</span>
                        </div>
                    </div>
                    <button className='slide-btn' onClick={() => setSlides(1)}><Arrow /></button>
                </div>      
            )
        }
    </div>
  )
}

export default GamesSlider