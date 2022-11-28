import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          num: 0
        };
    }

    increase = () => {
        this.setState({num: this.state.num + 1})
    };

    decrease = () => {
        this.setState({num: this.state.num - 1})
    };

    render() {
        return <div className="counter_wrapper">
        <h3>Class Counter</h3>
        <button className="counter_button" onClick={this.increase}>+</button>
        <h3>{this.state.num}</h3>
        <button className="counter_button" onClick={this.decrease}>-</button>
    </div>
    }
}

export default ClassCounter;
