import React from "react";
import './counter.css';

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="counter_wrapper">
            <button className="counter_button" onClick={() => setCount(e => e + 1)}>+</button>
            <h4 className="counter_text">{count}</h4>
            <button className="counter_button" onClick={() => setCount(e => e != 0 ? e - 1 : e)}>-</button>
        </div>
    );
}

export default Counter;