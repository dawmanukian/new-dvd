import React, { useEffect, useState } from 'react'
import "./up-de-page.css"
import { NavLink } from 'react-router-dom'
import {ReactComponent as Dvd} from "../../img/svg/dvd.svg"
import {ReactComponent as Dvd1} from "../../img/svg/dvd-1.svg"
import {ReactComponent as Dvd2} from "../../img/svg/dvd-2.svg"
import {ReactComponent as Dvd3} from "../../img/svg/dvd-3.svg"
import {ReactComponent as Dvd4} from "../../img/svg/dvd-4.svg"
import {ReactComponent as Dvd5} from "../../img/svg/dvd-5.svg"
import {ReactComponent as Scream} from "../../img/svg/scream.svg"
import {ReactComponent as Speed} from "../../img/svg/speed.svg"
import {ReactComponent as DvdBox} from "../../img/svg/dvd-box.svg"
import {ReactComponent as Moneta} from "../../img/svg/MonetaLogo.svg"
import { useLocation } from 'react-router-dom';

const UpDePage = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname)

    useEffect(() => {
        setPath(location.pathname)
    }, [location.pathname])

  return (
    <div className='page up-de-page'>
        <div className='up-de-links'>
            <NavLink className={'up-de-link'} to={'/upde/tap-up'}>Tap up</NavLink>
            <NavLink className={'up-de-link'} to={'/upde/income'}>Income</NavLink>
            <NavLink className={'up-de-link'} to={'/upde/mini-games'}>Mini-games</NavLink>
        </div>
        <div className='up-de-panels'>
            {
                path.includes("tap-up") && (
                    <>
            <div className='up-de-panel'>
                <div className='pn-data'>
                    <Dvd />
                    <div>
                        <p className='pn-data-header'>Reducing the timer</p>
                        <span className='pn-data-total'>Game timeout -  </span>
                    </div>
                </div>
                <button className="buy-btn">
                    <Moneta />
                    <p>250</p>
                </button>
            </div>
            <div className='up-de-panel'>
            <div className='pn-data'>
                <Dvd1 />
                <div>
                    <p className='pn-data-header'>Green DVD</p>
                    <span className='pn-data-total'>Total income -5</span>
                </div>
                </div>
                <button className="buy-btn">
                    <Moneta />
                    <p>100</p>
                </button>
            </div>
            <div className='up-de-panel'>
            <div className='pn-data'>
                <Dvd2 />
                <div>
                    <p className='pn-data-header'>Yellow DVD</p>
                    <span className='pn-data-total'>Total income - 40</span>
                </div>
                </div>
                <button className="buy-btn">
                    <Moneta />
                    <p>250</p>
                </button>
            </div>
            <div className='up-de-panel'>
            <div className='pn-data'>
                <Dvd3 />
                <div>
                    <p className='pn-data-header'>Orange DVD</p>
                    <span className='pn-data-total'>Total income - 15</span>
                </div>
                </div>
                <button className="buy-btn">
                    <Moneta />
                    <p>300</p>
                </button>
            </div>
            <div className='up-de-panel'>
            <div className='pn-data'>
                <Dvd4 />
                <div>
                    <p className='pn-data-header'>Blue DVD</p>
                    <span className='pn-data-total'>Total income - 25</span>
                </div>
                </div>
                <button className="buy-btn">
                    <Moneta />
                    <p>500</p>
                </button>
            </div>
            <div className='up-de-panel'>
            <div className='pn-data'>
                <Dvd5 />
                <div>
                    <p className='pn-data-header'>Red DVD</p>
                    <span className='pn-data-total'>Total income - 50</span>
                </div>
                </div>
                <button className="buy-btn">
                    <Moneta />
                    <p>1000</p>
                </button>
            </div>
            </>
                ) 
            }
            {
                path.includes("income") && (
                    <div className='up-de-panel'>
                    <div className='pn-data'>
                        <Dvd />
                        <div>
                            <p className='pn-data-header'>Passive DVD</p>
                            <span className='pn-data-total'>Total income - 100 000</span>
                        </div>
                        </div>
                        <button className="buy-btn">
                            <Moneta />
                            <p>100</p>
                        </button>
                    </div>
                )
            }
            {
                path.includes("mini-games") && (
                    <>
                    <div className='up-de-panel'>
                    <div className='pn-data'>
                        <Speed />
                        <div>
                            <p className='pn-data-header'>Speed</p>
                            <span className='pn-data-total'>Game timeout - 30</span>
                        </div>
                        </div>
                        <button className="buy-btn">
                            <Moneta />
                            <p>500</p>
                        </button>
                    </div>
                    <div className='up-de-panel'>
                    <div className='pn-data'>
                        <Scream />
                        <div>
                            <p className='pn-data-header'>Scream</p>
                            <span className='pn-data-total'>Game timeout - 45</span>
                        </div>
                        </div>
                        <button className="buy-btn">
                            <Moneta />
                            <p>1000</p>
                        </button>
                    </div>
                    <div className='up-de-panel'>
                    <div className='pn-data'>
                        <DvdBox />
                        <div>
                            <p className='pn-data-header'>DVD BOX</p>
                            <span className='pn-data-total'>Game timeout - 45</span>
                        </div>
                        </div>
                        <button className="buy-btn">
                            <Moneta />
                            <p>250</p>
                        </button>
                    </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default UpDePage