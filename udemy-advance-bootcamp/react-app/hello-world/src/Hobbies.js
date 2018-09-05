import React, {Component} from 'react';
import './Pet.css';

class HobbyList extends Component {
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

export default HobbyList;