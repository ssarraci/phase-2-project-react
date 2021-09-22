import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
   return (
      <div>
         <NavLink style={{ marginRight: "10px"}} to="/"> Home </NavLink>
         <NavLink style={{ marginRight: "10px"}} to="/idols"> All My Idols </NavLink>
         <NavLink style={{ marginRight: "10px"}} to="/idols/new"> Add a new Idol! </NavLink>
      </div>
   )
}

export default Nav