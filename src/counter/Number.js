import React from "react";
import './counter.css';

class Number extends React.PureComponent {
    render() {
        return <h3 className="counter_text">{this.props.num}</h3>
    }
}

export default Number;
