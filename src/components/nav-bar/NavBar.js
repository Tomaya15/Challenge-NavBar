import React, { Component } from 'react';
import styles from './NavBar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { MenuItems } from './MenuItems'


const NavBar = () =>{
   return (
      <div className='nav-bar'>
         <span className="nav-bar-logo">Jotaro's</span>
         <nav className="nav-bar-navegacion">
            <ul className='nav-bar-list'>
               {MenuItems.map((item) =>{
                  return(
                  <li className='nav-bar-list-item'><a href="/">{item.title}</a></li>
                  )
               })}
               
            </ul>
         </nav>
         <div className="nav-bar-shopIcon">   
         <a href="/"><ShoppingCartIcon /></a>
         </div>
      </div>
   )
}

export default NavBar;