import React from 'react'
import "./pr-um.css"

const PrUmPage = () => {
  return (
    <div className='page pr-um-page'>
        <div className='top-users'>
            <p className='top-users-header'>Increased chance</p>
            <div className='top-users-panel'>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Orange</p>
                    </div>
                    <div className='prc'>
                        50%
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Blue</p>
                    </div>
                    <div className='prc'>
                        30%
                    </div>
                </div>
                <div className='top-user'>
                    <div>
                        <p className='top-user-name'>Red</p>
                    </div>
                    <div className='prc'>
                        20%
                    </div>
                </div>
            </div>
        </div>
        <div className="boxes">
            <div className='box'><span>10% on referrals</span></div>
            <div className='box'><span>Timeout games 30 minutes</span></div>
            <div className='box' style={{background: "linear-gradient(180deg, #17191B 0%, #0A0D0F 100%)"}}><span>Unique <span style={{color: "#54B2FF"}}>nickname</span> color</span></div>
        </div>
        <button className='buy-premium'>Buy Premium</button>
    </div>
  )
}

export default PrUmPage