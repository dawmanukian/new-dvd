import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import {ReactComponent as Tap} from "../../img/svg/tap.svg"
import {ReactComponent as UpDe} from '../../img/svg/up-de.svg'
import {ReactComponent as Quest} from "../../img/svg/quest.svg"
import {ReactComponent as PrUm} from "../../img/svg/pr-um.svg"
import {ReactComponent as Top} from "../../img/svg/top.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={'/'} >
            <div className='route'>
                <Tap />
                <p className={'route-name'}>Tap</p>
            </div>
        </NavLink>
        <NavLink to={'/upde'}>
            <div className='route'>
                <UpDe style={{color: "red"}}/>
                <p className={'route-name'}>Up-de</p>
            </div>
        </NavLink>
        <NavLink to={'/quest'}>
            <div className='route'>
                <Quest />
                <p className={'route-name'}>Quest</p>
            </div>
        </NavLink>
        <NavLink to={'/prum'}>
            <div className='route'>
                <PrUm />
                <p className={'route-name'}>Pr-um</p>
            </div>
        </NavLink>
        <NavLink to={'/top'}>
            <div className='route'>
                <Top />
                <p className={'route-name'}>Top</p>
            </div>
        </NavLink>
    </div>
  )
}

export default Navbar