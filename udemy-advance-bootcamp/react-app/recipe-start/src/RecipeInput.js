import React , {Component} from 'react';
import './RecipeInput';

class RecipeInput extends Component {

    static defaultProps = {
        onClose() {},
        onSave() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: "",
            ingredients: "",
            img: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredients = this.handleNewIngredients.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleNewIngredients(e){
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            instructions: '',
            ingredients: '',
            img: ''
        })
    }
    render() {
        const {title, instructions, img, ingredients}  = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing, i) => (
            <div className="recipe-form-line" key={`ingredient-${i}`}>
                <label >
                    {i+1}
                    <input type="text" name={`ingredient-${i}`} value={ing} size={45} autocomplete={off} placeholder="ingredients" onChange={this.handleChangeIng} />
                </label>
            </div>
        ))
        return (
            <div className='recipe-form-line'>
                <from className="recipe-form" onSubmit={this.handleSubmit} >
                    <button type="button" className="close-button" onClick={onClose}> X </button>
                    
                </from>
            </div>
        );
    }
}



export default RecipeInput;
