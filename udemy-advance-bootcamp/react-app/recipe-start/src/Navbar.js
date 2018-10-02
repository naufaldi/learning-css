import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    static defaultProps = {
        onNewRecipe(){}
    }
    render(){
        return(
            <header>
                <h2><a href="">Recipe </a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;