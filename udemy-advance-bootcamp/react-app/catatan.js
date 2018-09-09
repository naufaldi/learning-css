class App extends Component {
    static defaultProps = {
        recipes : [{
            title: "spageti",
            ingredients: ["water", "flour"],
            instruction: "Mix Ingredients",
            img: "spagetti.png"
        }]
    }
    render(){
        return (
            <div>
                {this.props.recipes.map((r,index)=>(
                    <Recipe key={index} title={r.title} ingredients={r.ingredients} instruction={r.instruction} img={r.img} />
                ))}
            </div>
        );
    }
}

//or use 
class App extends Component {
    static defaultProps = {
        recipes : [{
            title: "spageti",
            ingredients: ["water", "flour"],
            instruction: "Mix Ingredients",
            img: "spagetti.png"
        }]
    }
    render(){
        return (
            <div>
                {this.props.recipes.map((r,index)=>(
                    <Recipe key={index} {...r} />
                ))}
            </div>
        );
    }
}