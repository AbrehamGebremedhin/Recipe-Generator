import React from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed top-0 m-1 flex flex-row space-x-3">
      <Link to={'/'}><NavbarIcon icon={<BiHomeCircle size={28}/>} text={"Home"}/></Link>
      <Link to={'/About'}><NavbarIcon icon={<IoMdInformationCircleOutline size={28}/>} text={"About"}/></Link> 
    </div>
  )
}

const NavbarIcon = ({icon, text}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default Navbar