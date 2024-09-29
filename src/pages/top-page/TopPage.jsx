import React from 'react'
import "./top-page.css"
import {ReactComponent as Moneta} from "../../img/svg/MonetaLogo.svg"

const TopPage = () => {
  return (
    <div className='page top-page'>
        <div className='top-users'>
            <p className='top-users-header'>Top 2 users</p>
            <div className='top-users-panel'>
                <div className='top-user'>
                    <div>
                        <div className='user-ava' />
                        <p className='top-user-name'>User</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <div className='user-ava' />
                        <p className='top-user-name'>User</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                    </div>
                </div>
            </div>
        </div>
        <div className='total-earned'>
            <p className='top-users-header'>Total earned</p>
        </div>
    </div>
  )
}

export default TopPage