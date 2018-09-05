import React, {Component} from 'react';
import './Recipe.css';
class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props; // const title = this.props.title;
        const ingredients = this
            .props
            .ingredients
            .map((ing, index) => (
                <li key={index}>{ing}</li>
            ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">
                        Recipe {title}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        <li>{ingredients}</li>
                    </ul>
                    <h4>Instruction</h4>
                    <p>{instructions}</p>

                </div>
            </div>
        )
    }
}

export default Recipe;