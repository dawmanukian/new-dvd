import React from 'react'
import "./header.css"
import borderColor from "../../img/border-color.png"
import borderColorL from "../../img/border-ll.png"
import {ReactComponent as Moneta} from "../../img/svg/MonetaLogo.svg"

const Header = () => {
  return (
    <header>
        <div className='header-blocks'>
            <div className='header-block'>
                <img src={borderColor}/>
                <div className='user-avatar'></div>
                <div className='user-data'>
                    <p className="user-nick">Username</p>
                    <p className='user-name'>@daw</p>
                </div>
            </div>
            <div className='header-block'>
                <div className='block-data'>
                    <p className='block-header'>Balance:</p>
                    <div className='ton-block'>
                        <Moneta />
                        <p className='money'>100</p>
                    </div>
                </div>
            </div>
            <div className='header-block'>
                <img src={borderColorL} style={{right: "0px", left: "auto"}}/>
                <div className="block-data">
                    <p className='block-header'>In hour:</p>
                    <div className="ton-block">
                        <Moneta />
                        <p className='money'>100</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header