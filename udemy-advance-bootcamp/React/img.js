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

class Pet extends React.Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">
                    Movie
                </h2>
                <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"/>
                <h5
                    style={{
                    fontSize: '2em',
                    margin: '2px'
                }}>
                    Hobbies :
                </h5>
                <HobbyList />
            </div>
        );
    }
}
ReactDOM.render(
    <Pet/>, document.getElementById("app"));