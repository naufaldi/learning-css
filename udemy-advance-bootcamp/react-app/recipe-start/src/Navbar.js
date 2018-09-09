import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <header>
                <h2><a href="">Recipe </a></h2>
                <nav>
                    <li><a href="">New Recipe</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;