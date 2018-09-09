class HobbyList extends React.Component {
    render() {
        const hobbies = ["sleeping", "eat", "swimming"];
        const style = {fontSize: '1.5em'};
        return (
            <ul>
                {hobbies.map((h, i) => {
                    return <li  key={i} style={style}>{h}</li>
                    })}
            </ul>
        );
    }
}


ReactDOM.render(
    <Pet/>, document.getElementById("app"));


   