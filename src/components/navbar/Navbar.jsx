import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import {ReactComponent as Tap} from "../../img/svg/tap.svg"
import {ReactComponent as UpDe} from '../../img/svg/up-de.svg'
import {ReactComponent as Quest} from "../../img/svg/quest.svg"
import {ReactComponent as PrUm} from "../../img/svg/pr-um.svg"
import {ReactComponent as Top} from "../../img/svg/top.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to={'/'}>
            <div className='route'>
                <Tap style={{color: "red"}}/>
                <p className='route-name'>Tap</p>
            </div>
        </Link>
        <Link to={'/upde'}>
            <div className='route'>
                <UpDe style={{color: "red"}}/>
                <p className='route-name'>Up-de</p>
            </div>
        </Link>
        <Link to={'/quest'}>
            <div className='route'>
                <Quest />
                <p className='route-name'>Quest</p>
            </div>
        </Link>
        <Link to={'/prum'}>
            <div className='route'>
                <PrUm />
                <p className='route-name'>Pr-um</p>
            </div>
        </Link>
        <Link to={'/top'}>
            <div className='route'>
                <Top />
                <p className='route-name'>Top</p>
            </div>
        </Link>
    </div>
  )
}

export default Navbar