import React from 'react'
import logo from "../images/brand_logo.png";
import "./NavbarMain.css";

function NavbarMain() {
  return (
     <div className='navbar'>


{/* LOGO STARTS */}
     <div className='logo'>
        <img src={logo}/>
     </div>
{/*LOGO ENDS  */}



{/* LIST STARTS */}
        <ul className='nav-list'>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
     {/* LIST ENDS */}


{/* LOGIN BUTTON STARTS */}
     <div className='login-button'>
        Login
     </div>
     {/* LOGIN BUTTON ENDS */}

    </div>
  )
}

export default NavbarMain