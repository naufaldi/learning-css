

class RandomBox extends React.Component {
    render() {
        const fontSize = Math.floor((Math.random() * 80)) + 20;
        const backgroundColor = ['red', 'green', 'blue', 'black'][Math.floor(Math.random() * 4)];
        return (
            <div
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor,
                fontSize: `${fontSize}px`,
                height: '200px',
                width: '500px',
                color: 'white'
            }}>
                Random Box
            </div>
        );
    }
}
ReactDOM.render(
    <RandomBox/>, document.getElementById("app"));