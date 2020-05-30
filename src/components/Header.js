import React from "react";
import './styles/Header.css';
import logo from '../images/logo.png';

import cart1 from '../images/cart1.png';
import foco from '../images/foco.png';
import menu from '../images/menu.png';
import search from '../images/search.png';
// class component
class Header extends React.Component {
  render() {
    return (
      <header>

        <div class="icon-bar">
        
        <a href="#"><i><img src={menu} /></i></a> 
     
      
        <a href="#"><i><img src={search} /></i></a> 
        <a href="#"><i><img src={logo} /></i></a> 
        <a href="#"><i><img src={foco} /></i></a> 
        <a href="#"><i><img src={cart1} /></i></a> 
        </div>
    

      </header>
    );
  }
}

export default Header;
