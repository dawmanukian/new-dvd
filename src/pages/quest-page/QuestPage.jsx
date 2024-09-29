import React from 'react'
import {ReactComponent as Moneta} from "../../img/svg/MonetaLogo.svg"

const QuestPage = () => {
  return (
    <div className='page quest-page'>
        <div className='top-users'>
            <p className='top-users-header'>Unicorn</p>
            <div className='top-users-panel'>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Subscribe to YouTube</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                        <span>+250</span>
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Subscribe to Twitter</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                        <span>+250</span>
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Subscribe to TG Channel</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                        <span>+250</span>
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Subscribe to TG Chat</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                        <span>+250</span>
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Connect wallet</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                        <span>+500</span>
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Invite 3 friends</p>
                    </div>
                    <div className='price-panel'>
                        <Moneta />
                        <span>+2500</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestPage